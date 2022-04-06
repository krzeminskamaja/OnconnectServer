import { StringFilter } from "../../util/StringFilter";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionWhereInput = {
  id?: StringFilter;
  ResourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
