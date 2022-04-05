import { JsonValue } from "type-fest";
import { ResourceHistory } from "../resourceHistory/ResourceHistory";
import { Keyword } from "../keyword/Keyword";
import { ResourceSuggestion } from "../resourceSuggestion/ResourceSuggestion";

export type Resource = {
  abstract: string;
  authorS: JsonValue;
  createdAt: Date;
  historyID?: Array<ResourceHistory>;
  id: string;
  keywordID?: Array<Keyword>;
  link: string;
  relaseDate: Date;
  suggestionID?: Array<ResourceSuggestion>;
  title: string;
  updatedAt: Date;
};
