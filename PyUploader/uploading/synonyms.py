import json
from typing import List, Tuple, Dict


def get_synonyms() -> Dict[str, List[str]]:
    file = open("file_resources/synonyms_filtered_v3.json", "r")
    synonyms = json.load(file)  # Loads the synonyms as a list of strings
    file.close()
    
    return dict(sorted(synonyms.items()))