import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionUpdateInput = {
  ResourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
