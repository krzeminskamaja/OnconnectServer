import { SynonymWhereInput } from "./SynonymWhereInput";
import { SynonymOrderByInput } from "./SynonymOrderByInput";

export type SynonymFindManyArgs = {
  where?: SynonymWhereInput;
  orderBy?: Array<SynonymOrderByInput>;
  skip?: number;
  take?: number;
};
