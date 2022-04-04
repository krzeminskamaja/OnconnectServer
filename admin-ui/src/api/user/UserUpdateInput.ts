import { InputJsonValue } from "../../types";
import { CurrentSourceUpdateManyWithoutUsersInput } from "./CurrentSourceUpdateManyWithoutUsersInput";
import { KeywordUpdateManyWithoutUsersInput } from "./KeywordUpdateManyWithoutUsersInput";
import { PastSourceUpdateManyWithoutUsersInput } from "./PastSourceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  calendar?: InputJsonValue;
  currentSourceID?: CurrentSourceUpdateManyWithoutUsersInput;
  firstName?: string | null;
  intersts?: KeywordUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  pastSourceId?: PastSourceUpdateManyWithoutUsersInput;
  profession?: string;
  roles?: Array<string>;
  username?: string;
  workplace?: string;
};
