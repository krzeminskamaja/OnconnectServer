import { JsonFilter } from "../../util/JsonFilter";
import { CurrentSourceListRelationFilter } from "../currentSource/CurrentSourceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordListRelationFilter } from "../keyword/KeywordListRelationFilter";
import { PastSourceListRelationFilter } from "../pastSource/PastSourceListRelationFilter";

export type UserWhereInput = {
  calendar?: JsonFilter;
  currentSourceID?: CurrentSourceListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  intersts?: KeywordListRelationFilter;
  lastName?: StringNullableFilter;
  pastSourceId?: PastSourceListRelationFilter;
  profession?: StringFilter;
  username?: StringFilter;
  workplace?: StringFilter;
};
