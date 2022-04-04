import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";
import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  interested?: UserCreateNestedManyWithoutKeywordsInput;
  keyIndex: number;
  name: string;
  resources?: ResourceCreateNestedManyWithoutKeywordsInput;
};
