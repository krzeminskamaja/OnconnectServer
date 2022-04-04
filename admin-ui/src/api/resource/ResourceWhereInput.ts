import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResourceWhereInput = {
  authorS?: StringNullableFilter;
  id?: StringFilter;
  keywords?: KeywordListRelationFilter;
  relaseDate?: DateTimeNullableFilter;
};
