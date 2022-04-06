import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";
import { SynonymUpdateManyWithoutKeywordsInput } from "./SynonymUpdateManyWithoutKeywordsInput";
import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  name?: string;
  resourceID?: ResourceUpdateManyWithoutKeywordsInput;
  synonymID?: SynonymUpdateManyWithoutKeywordsInput;
  userID?: UserUpdateManyWithoutKeywordsInput;
};
