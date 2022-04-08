import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";

export type SynonymWhereInput = {
  id?: StringFilter;
  keywordId?: KeywordWhereUniqueInput;
  name?: StringFilter;
};
