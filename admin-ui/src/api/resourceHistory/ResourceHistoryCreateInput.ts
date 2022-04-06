import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceHistoryCreateInput = {
  readDate?: Date | null;
  sourceID: ResourceWhereUniqueInput;
  userID?: UserWhereUniqueInput | null;
};
