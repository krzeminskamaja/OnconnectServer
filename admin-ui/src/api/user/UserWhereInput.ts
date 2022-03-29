import { CurrentSourceListRelationFilter } from "../currentSource/CurrentSourceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PastSourceListRelationFilter } from "../pastSource/PastSourceListRelationFilter";

export type UserWhereInput = {
  currentSourceID?: CurrentSourceListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  pastSourceId?: PastSourceListRelationFilter;
  profession?: StringFilter;
  username?: StringFilter;
  workplace?: StringFilter;
};
