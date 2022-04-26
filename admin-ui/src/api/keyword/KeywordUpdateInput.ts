import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { KeywordUpdateManyWithoutKeywordsInput } from "./KeywordUpdateManyWithoutKeywordsInput";
import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";
import { SynonymUpdateManyWithoutKeywordsInput } from "./SynonymUpdateManyWithoutKeywordsInput";
import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  childID?: KeywordWhereUniqueInput | null;
  name?: string;
  parentID?: KeywordUpdateManyWithoutKeywordsInput;
  resourceID?: ResourceUpdateManyWithoutKeywordsInput;
  synonymID?: SynonymUpdateManyWithoutKeywordsInput;
  userID?: UserUpdateManyWithoutKeywordsInput;
};
