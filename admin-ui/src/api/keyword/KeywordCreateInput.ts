import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { KeywordCreateNestedManyWithoutKeywordsInput } from "./KeywordCreateNestedManyWithoutKeywordsInput";
import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";
import { SynonymCreateNestedManyWithoutKeywordsInput } from "./SynonymCreateNestedManyWithoutKeywordsInput";
import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  childID?: KeywordWhereUniqueInput | null;
  name: string;
  parentID?: KeywordCreateNestedManyWithoutKeywordsInput;
  resourceID?: ResourceCreateNestedManyWithoutKeywordsInput;
  synonymID?: SynonymCreateNestedManyWithoutKeywordsInput;
  userID?: UserCreateNestedManyWithoutKeywordsInput;
};
