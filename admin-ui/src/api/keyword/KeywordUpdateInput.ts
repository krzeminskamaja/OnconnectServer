import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";
import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  interested?: UserUpdateManyWithoutKeywordsInput;
  keyIndex?: number;
  name?: string;
  resources?: ResourceUpdateManyWithoutKeywordsInput;
};
