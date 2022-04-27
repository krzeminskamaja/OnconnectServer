import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceSuggestionWhereInput = {
  id?: StringFilter;
  priority?: IntFilter;
  ResourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
