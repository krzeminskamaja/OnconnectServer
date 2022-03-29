import { CurrentSourceUpdateManyWithoutUsersInput } from "./CurrentSourceUpdateManyWithoutUsersInput";
import { PastSourceUpdateManyWithoutUsersInput } from "./PastSourceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  currentSourceID?: CurrentSourceUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  pastSourceId?: PastSourceUpdateManyWithoutUsersInput;
  profession?: string;
  roles?: Array<string>;
  username?: string;
  workplace?: string;
};
