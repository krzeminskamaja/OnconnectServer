import { JsonValue } from "type-fest";
import { ResourceHistory } from "../resourceHistory/ResourceHistory";
import { Keyword } from "../keyword/Keyword";
import { ResourceSuggestion } from "../resourceSuggestion/ResourceSuggestion";

export type Resource = {
  abstract: string;
  authors: JsonValue;
  createdAt: Date;
  historyID?: Array<ResourceHistory>;
  id: string;
  keywordID?: Array<Keyword>;
  link: string;
  relaseDate: Date;
  resourceType?: "Article" | "Podcast" | "Video";
  suggestionID?: Array<ResourceSuggestion>;
  title: string;
  updatedAt: Date;
};
