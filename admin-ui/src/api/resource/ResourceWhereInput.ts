import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ResourceHistoryListRelationFilter } from "../resourceHistory/ResourceHistoryListRelationFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ResourceSuggestionListRelationFilter } from "../resourceSuggestion/ResourceSuggestionListRelationFilter";

export type ResourceWhereInput = {
  abstract?: StringFilter;
  authors?: JsonFilter;
  historyID?: ResourceHistoryListRelationFilter;
  id?: StringFilter;
  keywordID?: KeywordListRelationFilter;
  link?: StringFilter;
  relaseDate?: DateTimeFilter;
  resourceType?: "Article" | "Podcast" | "Video";
  suggestionID?: ResourceSuggestionListRelationFilter;
  title?: StringFilter;
};
