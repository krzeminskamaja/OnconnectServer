import { Keyword } from "../keyword/Keyword";

export type Synonym = {
  createdAt: Date;
  id: string;
  keywordId?: Keyword | null;
  updatedAt: Date;
};
