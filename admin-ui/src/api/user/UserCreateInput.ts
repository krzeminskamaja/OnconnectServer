import { InputJsonValue } from "../../types";
import { ResourceHistoryCreateNestedManyWithoutUsersInput } from "./ResourceHistoryCreateNestedManyWithoutUsersInput";
import { KeywordCreateNestedManyWithoutUsersInput } from "./KeywordCreateNestedManyWithoutUsersInput";
import { ResourceSuggestionCreateNestedManyWithoutUsersInput } from "./ResourceSuggestionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  calendar?: InputJsonValue;
  firstName?: string | null;
  historyID?: ResourceHistoryCreateNestedManyWithoutUsersInput;
  interestID?: KeywordCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  profession: string;
  roles: Array<string>;
  suggestionID?: ResourceSuggestionCreateNestedManyWithoutUsersInput;
  username: string;
};
