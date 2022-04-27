import { KeywordUpdateManyWithoutKeywordsInput } from "./KeywordUpdateManyWithoutKeywordsInput";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";
import { SynonymUpdateManyWithoutKeywordsInput } from "./SynonymUpdateManyWithoutKeywordsInput";
import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  childID?: KeywordUpdateManyWithoutKeywordsInput;
  name?: string;
  parentID?: KeywordWhereUniqueInput | null;
  resourceID?: ResourceUpdateManyWithoutKeywordsInput;
  synonymID?: SynonymUpdateManyWithoutKeywordsInput;
  userID?: UserUpdateManyWithoutKeywordsInput;
};
