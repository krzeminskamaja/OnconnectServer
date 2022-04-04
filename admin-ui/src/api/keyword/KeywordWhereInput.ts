import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  keyIndex?: IntNullableFilter;
  name?: StringNullableFilter;
  resource?: ResourceListRelationFilter;
};
