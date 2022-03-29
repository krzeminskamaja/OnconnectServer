import { CurrentSourceCreateNestedManyWithoutUsersInput } from "./CurrentSourceCreateNestedManyWithoutUsersInput";
import { PastSourceCreateNestedManyWithoutUsersInput } from "./PastSourceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  currentSourceID?: CurrentSourceCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  pastSourceId?: PastSourceCreateNestedManyWithoutUsersInput;
  profession: string;
  roles: Array<string>;
  username: string;
  workplace: string;
};
