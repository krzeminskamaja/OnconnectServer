from datetime import date
import heapq
from typing import Set

from requests import Session

from heuristics import HeurCombined
from uploader import get_session, FULLPATH

RANKER = HeurCombined()


class User:
    def __init__(self, session, user_id: str):
        self.id = user_id

        # Fetch user interests
        response_userInterests = session.get(FULLPATH + f'users/{user_id}/interestID')
        interests_array = response_userInterests.json()
        self.interests = set(interest['id'] for interest in interests_array)  # ID array

        # Fetch user history
        response_userHistory = session.get(FULLPATH + f'users/{user_id}/historyID')
        history_array = response_userHistory.json()

        self.history = set(resource['id'] for resource in history_array)  # ID array


class Resource:
    def __init__(self):
        self.keywords = set()
        self.title = ""
        self.id = ""
        self.date = None

    def init_from_dict(self, session, resource_dict):
        self.id = resource_dict['id']
        self.title = resource_dict['title']
        self.keywords = get_resource_keywords(session, resource_dict['id'])

        date_split = resource_dict['relaseDate'].split("T")
        self.date = date.fromisoformat(date_split[0])


# Fetches the keywords for a given resource
def get_resource_keywords(session, resource_id: str) -> Set[str]:
    keyword_response = session.get(FULLPATH + f'resources/{resource_id}/keywordID')
    keyword_json = keyword_response.json()

    return set(keyword['id'] for keyword in keyword_json)


# Finds all relevant resources for a given user
def fetch_resources(session, user: User):
    # for each interests (keyword) we get an array of resources and append to our array
    resourceSuggestions = []
    for interest in user.interests:
        response_resourcesForKeyword = session.get(FULLPATH + f'keywords/{interest}/resourceID')
        resourceSuggestions.extend(response_resourcesForKeyword.json())

    # TODO: Remove (potential) duplicate entries
    return resourceSuggestions
    # return list(set(resourceSuggestions))


# Ranks the given resources according to the specific user
def rank_resources(session, resources, user: User, n=30):
    best_resources = []

    resource = Resource()
    for res in resources:
        resource.init_from_dict(session, res)

        # Don't suggest already seen resources
        if resource.id not in user.history:
            fit = RANKER.match(user, resource)

            # Add to best resources if fitness is high enough
            if len(best_resources) < n:
                heapq.heappush(best_resources, (fit, resource.id))
            elif fit > best_resources[0][0]:
                heapq.heapreplace(best_resources, (fit, resource.id))

    # Return them in decreasing order of fitness
    ordered_resources = sorted(best_resources, key=lambda item: -item[0])
    return [resource for _, resource in ordered_resources]


# Finds suggestions to the user given by the userID
def select_suggestions(session: Session, userID: str):
    user = User(session, userID)

    # Find appropriate resources and rank them
    resources = fetch_resources(session, user)
    suggestions = rank_resources(session, resources, user)

    # Upload suggested resources
    for suggestion in suggestions:
        response_syn = session.post(FULLPATH + "resourceSuggestions",
                                    json={"ResourceID": {"id": suggestion}, "userID": {"id": userID}})
    print(len(suggestions))


def main():
    session = get_session()

    # selection draft
    select_suggestions(session, 'cl2a5eamp24623vkukui100r6n')


if __name__ == '__main__':
    main()
