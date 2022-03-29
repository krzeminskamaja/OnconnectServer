import { SourceDetailWhereInput } from "./SourceDetailWhereInput";
import { SourceDetailOrderByInput } from "./SourceDetailOrderByInput";

export type SourceDetailFindManyArgs = {
  where?: SourceDetailWhereInput;
  orderBy?: Array<SourceDetailOrderByInput>;
  skip?: number;
  take?: number;
};
