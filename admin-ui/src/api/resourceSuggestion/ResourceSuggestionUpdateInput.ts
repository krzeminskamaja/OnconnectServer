import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionUpdateInput = {
  priority?: number;
  ResourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
