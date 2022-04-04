import { KeywordWhereInput } from "./KeywordWhereInput";
import { KeywordOrderByInput } from "./KeywordOrderByInput";

export type KeywordFindManyArgs = {
  where?: KeywordWhereInput;
  orderBy?: Array<KeywordOrderByInput>;
  skip?: number;
  take?: number;
};
