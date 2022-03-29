import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SourceDetailWhereInput = {
  abstract?: StringNullableFilter;
  author?: StringNullableFilter;
  id?: StringFilter;
  keyword?: StringNullableFilter;
  title?: StringNullableFilter;
  uniqueSourceKey?: StringFilter;
};
