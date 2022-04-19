import json
from typing import List, Any

from pymed import article, PubMed

# Abstract IO class
class PubMedIO:
    def get_results(self) -> List[article.PubMedArticle]:
        pass

    @staticmethod
    def dump_results(results: List[article.PubMedArticle], filename):
        file = open(filename, "w")
        json_str = json.dumps(results, cls=PubEncoder)
        file.write(json_str)
        file.close()

# Loads PubMed articles using PubMed API
class PubOnlineLoader(PubMedIO):
    def __init__(self, pubmed):
        self.pubmed = pubmed

    def get_results(self) -> List[article.PubMedArticle]:
        # https://pubmed.ncbi.nlm.nih.gov/advanced/ Help with query format.
        results_itr = self.pubmed.query("(Free full text[Filter])AND (lung cancer[keyword])", max_results=5000)
        return [result for result in results_itr if hasattr(result, "keywords") and len(result.keywords) > 0]

# Method to load PubMedArticle
def as_result(dct):
    if 'abstract' in dct:
        return article.PubMedArticle(**dct)
    return dct

# Loads PubMed articles from a JSON file
class PubJSONLoader(PubMedIO):
    def __init__(self, filename: str):
        self.filename = filename

    def get_results(self) -> List[article.PubMedArticle]:
        file = open(self.filename, "r")
        results_str = json.load(file, object_hook=as_result)  # Loads the articles as a list of strings
        file.close()
        return [article.PubMedArticle(**json.loads(result)) for result in results_str]

# Encodes PubMed articles to JSON format 
class PubEncoder(json.JSONEncoder):
    def default(self, o: Any) -> Any:
        if isinstance(o, article.PubMedArticle):
            return o.toJSON()
        return json.JSONEncoder.default(o)

# Downloads articles from WEB
def pub_main():
    import main
    pubmed = main.PUBMED
    print("Downloading PubMed articles")

    publoader = PubOnlineLoader(pubmed)

    results = publoader.get_results()
    publoader.dump_results(results, "articles.json")


if __name__ == '__main__':
    pub_main()
