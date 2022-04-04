import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  interested?: UserListRelationFilter;
  keyIndex?: IntFilter;
  name?: StringFilter;
  resources?: ResourceListRelationFilter;
};
