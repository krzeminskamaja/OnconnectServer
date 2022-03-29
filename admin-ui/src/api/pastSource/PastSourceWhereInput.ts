import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PastSourceWhereInput = {
  id?: StringFilter;
  sourceId?: StringFilter;
  userID?: UserListRelationFilter;
};
