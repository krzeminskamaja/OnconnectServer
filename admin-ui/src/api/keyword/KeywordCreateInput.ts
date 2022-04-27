import { KeywordCreateNestedManyWithoutKeywordsInput } from "./KeywordCreateNestedManyWithoutKeywordsInput";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";
import { SynonymCreateNestedManyWithoutKeywordsInput } from "./SynonymCreateNestedManyWithoutKeywordsInput";
import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  childID?: KeywordCreateNestedManyWithoutKeywordsInput;
  name: string;
  parentID?: KeywordWhereUniqueInput | null;
  resourceID?: ResourceCreateNestedManyWithoutKeywordsInput;
  synonymID?: SynonymCreateNestedManyWithoutKeywordsInput;
  userID?: UserCreateNestedManyWithoutKeywordsInput;
};
