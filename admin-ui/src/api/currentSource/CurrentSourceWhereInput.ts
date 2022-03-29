import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CurrentSourceWhereInput = {
  id?: StringFilter;
  sourceId?: StringNullableFilter;
  userId?: UserListRelationFilter;
};
