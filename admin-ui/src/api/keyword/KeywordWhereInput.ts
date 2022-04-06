import { StringFilter } from "../../util/StringFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { SynonymListRelationFilter } from "../synonym/SynonymListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  resourceID?: ResourceListRelationFilter;
  synonymID?: SynonymListRelationFilter;
  userID?: UserListRelationFilter;
};
