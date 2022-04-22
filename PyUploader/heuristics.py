from datetime import date
from math import sqrt


class Heuristic:
    def match(self, user, resource) -> float:
        return 0


# Heuristic based on the interests of the user
class HeurInterests(Heuristic):
    def match(self, user, resource) -> float:
        overlap = user.interests.intersection(resource.keywords)
        return len(overlap) / min(len(resource.keywords), len(user.interests))


# Heuristic based on how recent the resource was created
class HeurRecent(Heuristic):
    def match(self, user, resource) -> float:
        now = date.today()
        delta_days = (now - resource.date).days

        return 1 / sqrt(max(delta_days / 30, 1))


# Composite heuristic based on how recent the resource was created, as well as user interests
class HeurCombined(Heuristic):
    def __init__(self):
        self.match_heur = HeurInterests()
        self.date_heur = HeurRecent()

    def match(self, user, resource) -> float:
        return self.match_heur.match(user, resource) * self.date_heur.match(user, resource)
