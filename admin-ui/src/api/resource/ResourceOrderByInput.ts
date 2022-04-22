import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  abstract?: SortOrder;
  authors?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  relaseDate?: SortOrder;
  resourceType?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
