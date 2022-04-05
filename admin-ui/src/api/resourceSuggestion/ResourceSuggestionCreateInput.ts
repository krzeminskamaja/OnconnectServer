import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionCreateInput = {
  ResourceID?: ResourceWhereUniqueInput | null;
  userID: UserWhereUniqueInput;
};
