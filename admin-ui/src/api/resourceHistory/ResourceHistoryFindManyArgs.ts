import { ResourceHistoryWhereInput } from "./ResourceHistoryWhereInput";
import { ResourceHistoryOrderByInput } from "./ResourceHistoryOrderByInput";

export type ResourceHistoryFindManyArgs = {
  where?: ResourceHistoryWhereInput;
  orderBy?: Array<ResourceHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
