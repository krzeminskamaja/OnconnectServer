import { PastSourceWhereInput } from "./PastSourceWhereInput";
import { PastSourceOrderByInput } from "./PastSourceOrderByInput";

export type PastSourceFindManyArgs = {
  where?: PastSourceWhereInput;
  orderBy?: Array<PastSourceOrderByInput>;
  skip?: number;
  take?: number;
};
