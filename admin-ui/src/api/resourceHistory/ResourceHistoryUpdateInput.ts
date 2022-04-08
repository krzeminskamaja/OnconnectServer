import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceHistoryUpdateInput = {
  readDate?: Date | null;
  sourceID?: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput;
};
