import { JsonValue } from "type-fest";
import { ResourceHistory } from "../resourceHistory/ResourceHistory";
import { Keyword } from "../keyword/Keyword";
import { ResourceSuggestion } from "../resourceSuggestion/ResourceSuggestion";

export type User = {
  calendar: JsonValue;
  createdAt: Date;
  firstName: string | null;
  historyID?: Array<ResourceHistory>;
  id: string;
  interestID?: Array<Keyword>;
  lastName: string | null;
  profession: string;
  roles: Array<string>;
  suggestionID?: Array<ResourceSuggestion>;
  updatedAt: Date;
  username: string;
};
