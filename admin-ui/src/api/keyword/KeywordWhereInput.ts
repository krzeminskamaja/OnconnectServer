import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { KeywordListRelationFilter } from "./KeywordListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  interested?: UserListRelationFilter;
  keyIndex?: IntNullableFilter;
  keywords?: KeywordListRelationFilter;
  name?: StringNullableFilter;
  parentKeyword?: KeywordWhereUniqueInput;
  resources?: ResourceListRelationFilter;
};
