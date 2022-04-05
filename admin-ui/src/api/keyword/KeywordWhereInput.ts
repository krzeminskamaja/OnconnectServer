import { StringFilter } from "../../util/StringFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  resourceID?: ResourceListRelationFilter;
  userID?: UserListRelationFilter;
};
