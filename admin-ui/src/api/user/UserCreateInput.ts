import { InputJsonValue } from "../../types";
import { CurrentSourceCreateNestedManyWithoutUsersInput } from "./CurrentSourceCreateNestedManyWithoutUsersInput";
import { KeywordCreateNestedManyWithoutUsersInput } from "./KeywordCreateNestedManyWithoutUsersInput";
import { PastSourceCreateNestedManyWithoutUsersInput } from "./PastSourceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  calendar?: InputJsonValue;
  currentSourceID?: CurrentSourceCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  intersts?: KeywordCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  pastSourceId?: PastSourceCreateNestedManyWithoutUsersInput;
  profession: string;
  roles: Array<string>;
  username: string;
  workplace: string;
};
