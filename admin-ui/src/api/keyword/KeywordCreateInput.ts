import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";
import { SynonymCreateNestedManyWithoutKeywordsInput } from "./SynonymCreateNestedManyWithoutKeywordsInput";
import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  name: string;
  resourceID?: ResourceCreateNestedManyWithoutKeywordsInput;
  synonymID?: SynonymCreateNestedManyWithoutKeywordsInput;
  userID?: UserCreateNestedManyWithoutKeywordsInput;
};
