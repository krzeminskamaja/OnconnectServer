import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";

export type SynonymCreateInput = {
  keywordId: KeywordWhereUniqueInput;
  name: string;
};
