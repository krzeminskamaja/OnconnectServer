import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";
import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  name: string;
  resourceID?: ResourceCreateNestedManyWithoutKeywordsInput;
  userID?: UserCreateNestedManyWithoutKeywordsInput;
};
