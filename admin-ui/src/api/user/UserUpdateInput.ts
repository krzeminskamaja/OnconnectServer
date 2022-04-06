import { InputJsonValue } from "../../types";
import { ResourceHistoryUpdateManyWithoutUsersInput } from "./ResourceHistoryUpdateManyWithoutUsersInput";
import { KeywordUpdateManyWithoutUsersInput } from "./KeywordUpdateManyWithoutUsersInput";
import { ResourceSuggestionUpdateManyWithoutUsersInput } from "./ResourceSuggestionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  calendar?: InputJsonValue;
  firstName?: string | null;
  historyID?: ResourceHistoryUpdateManyWithoutUsersInput;
  interestID?: KeywordUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  profession?: string;
  roles?: Array<string>;
  suggestionID?: ResourceSuggestionUpdateManyWithoutUsersInput;
  username?: string;
};
