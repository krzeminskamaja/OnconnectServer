import { ResourceSuggestionWhereInput } from "./ResourceSuggestionWhereInput";
import { ResourceSuggestionOrderByInput } from "./ResourceSuggestionOrderByInput";

export type ResourceSuggestionFindManyArgs = {
  where?: ResourceSuggestionWhereInput;
  orderBy?: Array<ResourceSuggestionOrderByInput>;
  skip?: number;
  take?: number;
};
