import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResourceHistoryListRelationFilter } from "../resourceHistory/ResourceHistoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { ResourceSuggestionListRelationFilter } from "../resourceSuggestion/ResourceSuggestionListRelationFilter";

export type UserWhereInput = {
  calendar?: JsonFilter;
  firstName?: StringNullableFilter;
  historyID?: ResourceHistoryListRelationFilter;
  id?: StringFilter;
  interestID?: KeywordListRelationFilter;
  lastName?: StringNullableFilter;
  profession?: StringFilter;
  suggestionID?: ResourceSuggestionListRelationFilter;
  username?: StringFilter;
};
