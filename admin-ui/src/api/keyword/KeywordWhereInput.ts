import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { KeywordListRelationFilter } from "./KeywordListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { SynonymListRelationFilter } from "../synonym/SynonymListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type KeywordWhereInput = {
  childID?: KeywordWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  parentID?: KeywordListRelationFilter;
  resourceID?: ResourceListRelationFilter;
  synonymID?: SynonymListRelationFilter;
  userID?: UserListRelationFilter;
};
