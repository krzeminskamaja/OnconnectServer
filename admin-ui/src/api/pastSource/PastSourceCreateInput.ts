import { UserCreateNestedManyWithoutPastSourcesInput } from "./UserCreateNestedManyWithoutPastSourcesInput";

export type PastSourceCreateInput = {
  sourceId: string;
  userID?: UserCreateNestedManyWithoutPastSourcesInput;
};
