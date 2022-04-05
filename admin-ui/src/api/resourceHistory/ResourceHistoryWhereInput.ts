import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceHistoryWhereInput = {
  id?: StringFilter;
  readDate?: DateTimeNullableFilter;
  sourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
