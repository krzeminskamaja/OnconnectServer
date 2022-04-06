import { SortOrder } from "../../util/SortOrder";

export type ResourceHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  readDate?: SortOrder;
  sourceIDId?: SortOrder;
  updatedAt?: SortOrder;
  userIDId?: SortOrder;
};
