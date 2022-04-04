import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ResourceWhereInput = {
  abstract?: StringFilter;
  authorS?: JsonFilter;
  id?: StringFilter;
  keywords?: KeywordListRelationFilter;
  link?: StringFilter;
  relaseDate?: DateTimeFilter;
  title?: StringFilter;
};
