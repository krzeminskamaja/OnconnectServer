import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";
import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  name?: string;
  resourceID?: ResourceUpdateManyWithoutKeywordsInput;
  userID?: UserUpdateManyWithoutKeywordsInput;
};
