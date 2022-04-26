import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionCreateInput = {
  priority: number;
  ResourceID: ResourceWhereUniqueInput;
  userID: UserWhereUniqueInput;
};
