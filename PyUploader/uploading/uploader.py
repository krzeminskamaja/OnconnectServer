import json
from typing import List
from datetime import datetime
import requests
from pymed.article import PubMedArticle
from requests import Session

from pubmedIO import PubJSONLoader
from synonyms import get_synonyms

ENDPOINT = "http://localhost:3000/"
APIPATH = "api/"
FULLPATH = ENDPOINT + APIPATH

USERNAME = "admin"
PWD = "admin"


# Standardizes given keyword
def standardize_text(keyword: str) -> str:
    stripped = keyword.lower().lstrip()
    stripped = stripped.replace('\u2010', '-')
    stripped = stripped.replace('\u2013', '-')
    stripped = stripped.replace('\u2011', '-')
    return stripped


def get_session() -> Session:
    # Get authorized
    login_response = requests.post(FULLPATH + "login", json={"username": USERNAME, "password": PWD})
    login_token = login_response.json()['accessToken']
    print("Login token: " + login_token)

    # Construct session
    headers = {"Authorization": "Bearer " + login_token}
    session = requests.Session()
    session.headers.update(headers)
    return session


# Upload the first n keywords
def upload_keys(session, keywords, n):
    i = 0
    for keyword in keywords.keys():
        res = session.post(FULLPATH + "keywords", data={"name": keyword})
        i += 1
        if i > n:
            return


# Upload synonyms for the first n keywords
def upload_synonyms(session, keywords, n):
    i = 0
    for keyword, synonyms in keywords.items():
        # Get keyword id
        response_key = session.get(FULLPATH + "keywords", params={'where[name][equals]': keyword, 'take': 1})
        key_id = response_key.json()[0]['id']

        # Upload main keyword as a synonym
        response_syn = session.post(FULLPATH + "synonyms", json={"keywordId": {"id": key_id}, "name": keyword})

        # Upload synonyms
        for synonym in synonyms:
            response = session.post(FULLPATH + "synonyms", json={"keywordId": {"id": key_id}, "name": synonym})

        i += 1
        if i > n:
            return


def upload_resources(session: Session, resources: List[PubMedArticle], n: int):
    for i in range(0, n):
        resource = resources[i]

        # Find replacement synonyms for all keywords and add them
        connected_keywords = []
        for keyword in resource.keywords:

            response_keyword = session.get(FULLPATH + "synonyms",
                                           params={'where[name][equals]': standardize_text(keyword), 'take': 1})
            response_json = response_keyword.json()

            # Article keyword is not present in keyword database
            if len(response_json) == 0:
                continue

            # Find representative keyword
            representative_id = response_json[0]['keywordId']['id']
            connected_keywords.append({"id": representative_id})

        # Filter away articles with no resulting keywords
        if len(connected_keywords) == 0:
            print("Warning: Article \"" + resource.title + "\" was skipped as it had no keywords in the database.")
            continue

        # Format date and authors
        date = datetime.fromisoformat(resource.publication_date)
        authors = json.dumps(resource.authors)

        # Post resource
        response_resource = session.post(FULLPATH + "resources", json={
            "title": resource.title,
            "abstract": resource.abstract,
            "authorS": authors,
            "link": resource.doi,
            "relaseDate": date.isoformat(),
            "keywordID": {"connect": connected_keywords}
        })


# Delete ALL existing resources to start from a clean slate
def delete_all_resources(session):
    response = session.get(FULLPATH + "resources")
    resources = response.json()
    for resource in resources:
        resp = session.delete(FULLPATH + "resources" + "/" + resource['id'])


def main():
    session = get_session()

    # Get lcoal resources
    keywords = get_synonyms()
    resources = PubJSONLoader("file_resources/articles.json").get_results()

    # Upload the first n keywords and synonyms
    # upload_keys(session, keywords, len(keywords))
    # upload_synonyms(session, keywords, len(keywords))
    # delete_all_resources(session)

    upload_test_user(session)
    n = 100
    #upload_resources(session, resources, n)


def upload_test_user(session):
    interests = ["cancer biomarkers", "NSCLC", "diagnostic biomarkers"]
    interestIDs = []
    for interest in interests:

        response_keyword = session.get(FULLPATH + "synonyms",
                                       params={'where[name][equals]': standardize_text(interest), 'take': 1})
        response_json = response_keyword.json()

        # Article keyword is not present in keyword database
        if len(response_json) == 0:
            continue

        # Find representative keyword
        representative_id = response_json[0]['keywordId']['id']
        interestIDs.append({"id": representative_id})

    post_response = session.post(FULLPATH + "users", json={
        "firstName": "Olav",
        "interestID": {"connect": interestIDs},
        "lastName": "Olsen",
        "profession": "CS student",
        "username": "s184195",
        "password": "password",
        "roles": ["user"]
    })

    print(post_response.status_code)


if __name__ == '__main__':
    main()
