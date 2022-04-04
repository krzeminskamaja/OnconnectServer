import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResourceWhereInput = {
  authorS?: StringNullableFilter;
  id?: StringFilter;
  keywords?: StringNullableFilter;
  relaseDate?: DateTimeNullableFilter;
};
