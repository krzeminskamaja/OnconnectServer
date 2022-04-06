import { Keyword } from "../keyword/Keyword";

export type Synonym = {
  createdAt: Date;
  id: string;
  keywordId?: Keyword;
  name: string;
  updatedAt: Date;
};
