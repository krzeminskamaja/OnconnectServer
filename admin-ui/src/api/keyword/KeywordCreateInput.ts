import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  keyIndex?: number | null;
  name?: string | null;
  resource?: ResourceCreateNestedManyWithoutKeywordsInput;
};
