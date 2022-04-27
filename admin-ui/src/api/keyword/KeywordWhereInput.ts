import { KeywordListRelationFilter } from "./KeywordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { SynonymListRelationFilter } from "../synonym/SynonymListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type KeywordWhereInput = {
  childID?: KeywordListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  parentID?: KeywordWhereUniqueInput;
  resourceID?: ResourceListRelationFilter;
  synonymID?: SynonymListRelationFilter;
  userID?: UserListRelationFilter;
};
