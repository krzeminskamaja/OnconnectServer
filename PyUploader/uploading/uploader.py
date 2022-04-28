import json
from datetime import datetime
from typing import List

import requests
from pymed.article import PubMedArticle
from requests import Session

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


def get_id_by_name(session, db_type: str, name: str) -> str:
    response = session.get(FULLPATH + db_type, params={'where[name][equals]': name, 'take': 1})
    return response.json()[0]['id']


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


def flat_list_rec(keytree, path):
    built_list = []

    # Build flat list over keywords
    for parent, children in keytree.items():
        next_path = path + "/" + parent
        built_list.append(next_path)
        built_list.extend(flat_list_rec(children, next_path))
    old_parents = [key for key in keytree.keys()]

    # Replace parent names
    for old_parent in old_parents:
        keytree[path + "/" + old_parent] = keytree.pop(old_parent)
    return built_list


# Renames the loaded keywords and returns a flattened list
def rename_flatten(keytree):
    return flat_list_rec(keytree, "")


def patch_rec(session, keytree, parent_id):
    connect_list = []

    # Find IDs of children
    for child, grandchildren in keytree.items():
        child_id = get_id_by_name(session, "keywords", child)
        connect_list.append({"id": child_id})

        # Resolve children relations
        patch_rec(session, grandchildren, child_id)

    # If any relations are present, update them
    if len(connect_list) > 0:
        session.patch(FULLPATH + f'keywords/{parent_id}', json={"childID": {"set": connect_list}})


# Make parent-child relations in DB
def patch_keytree(session, keytree):
    for main_category, children in keytree.items():
        main_id = get_id_by_name(session, "keywords", main_category)
        patch_rec(session, children, main_id)


def upload_pretty_keywords(session):
    file = open("../file_resources/key_hierarchy.json", "r")
    keytree = json.load(file)

    keys_flat = rename_flatten(keytree)
    synonyms = dict([(key, []) for key in keys_flat])

    # Upload the keywords
    upload_keys(session, synonyms, len(synonyms))
    upload_synonyms(session, synonyms, len(synonyms))
    patch_keytree(session, keytree)


def format_article_url(resource: PubMedArticle):
    # Find the most recent url for the article
    if resource.doi is not None:
        return "https://doi.org/" + resource.doi.split("\n")[0]
    else:
        return "https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/" + resource.pubmed_id.split("\n")[0]


def upload_pubmed_resources(session: Session, resources: List[PubMedArticle], n: int):
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
            "authors": authors,
            "link": format_article_url(resource),
            "resourceType": "Article",
            "releaseDate": date.isoformat(),
            "keywordID": {"connect": connected_keywords}
        })


def upload_resources(session: Session, resources):
    for resource in resources:
        # Find id for resource keywords for all keywords and add them
        connected_keywords = []
        for keyword in resource['keywords']:
            key_id = get_id_by_name(session, "keywords", "/" + keyword)
            connected_keywords.append({"id": key_id})

        # Format date and authors
        date = datetime.fromisoformat(resource['releaseDate'])
        authors = json.dumps(resource['authors'])

        data = {
            "title": resource['title'],
            "abstract": resource['abstract'],
            "authors": authors,
            "link": resource['link'],
            "resourceType": resource['resourceType'],
            "relaseDate": date.isoformat(),
            "keywordID": {"connect": connected_keywords}
        }

        if len(resource['image']) > 0:
            data['imageURL'] = resource['image']

        # Post resource
        response_resource = session.post(FULLPATH + "resources", json=data)

        if response_resource.status_code >= 400:
            print("Error in uploading resources")


# Delete ALL existing resources to start from a clean slate
def delete_all_resources(session):
    response = session.get(FULLPATH + "resources")
    resources = response.json()
    for resource in resources:
        resp = session.delete(FULLPATH + "resources" + "/" + resource['id'])


def fake_suggestions(session):
    response_resource = session.get(FULLPATH + "resources")
    resources = response_resource.json()
    #suggest_list = [{"id": resource['id']} for resource in resources]
    suggest_list = [resource['id'] for resource in resources]
    return suggest_list


def delete_test_user(session):
    response = session.get(FULLPATH + "users", params={'where[firstName][equals]': "Lars", 'take': 1})
    resp_json = response.json()

    if len(resp_json) == 0:
        return

    user_id = resp_json[0]['id']
    session.delete(FULLPATH + "users/" + user_id)

def upload_test_user(session):
    interests = ["NSCLC", "Histology/EGFR", "Treatment/Immunotherapy"]
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
        "firstName": "Lars",
        "interestID": {"connect": interestIDs},
        "lastName": "Larsen",
        "profession": "Oncologist",
        "username": "llarsen",
        "password": "password",
        "roles": ["user"],

    })

    userID = session.get(FULLPATH + "users", params={'where[firstName][equals]': "Lars", 'take': 1}).json()[0]['id']

    # Set suggested resources
    for index, suggestion  in enumerate(fake_suggestions(session)):
        response_syn = session.post(FULLPATH + "resourceSuggestions", json={
            "ResourceID": {"id": suggestion},
            "userID": {"id": userID},
            "priority": index
        })
        if response_syn.status_code >= 400:
            print("Error in adding suggestion")
    if post_response.status_code >= 400:
        print("Error in uploading test user")

    print("UserID: " + userID)

def get_resources():
    file = open("../file_resources/resources.json", "r")
    return json.load(file)


def main():
    session = get_session()
    resources = get_resources()

    upload_pretty_keywords(session)

    delete_all_resources(session)
    upload_resources(session, resources)

    delete_test_user(session)
    upload_test_user(session)


if __name__ == '__main__':
    main()
