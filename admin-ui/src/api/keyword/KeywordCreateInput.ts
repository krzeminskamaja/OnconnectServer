import { UserCreateNestedManyWithoutKeywordsInput } from "./UserCreateNestedManyWithoutKeywordsInput";
import { KeywordCreateNestedManyWithoutKeywordsInput } from "./KeywordCreateNestedManyWithoutKeywordsInput";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceCreateNestedManyWithoutKeywordsInput } from "./ResourceCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  interested?: UserCreateNestedManyWithoutKeywordsInput;
  keyIndex?: number | null;
  keywords?: KeywordCreateNestedManyWithoutKeywordsInput;
  name?: string | null;
  parentKeyword?: KeywordWhereUniqueInput | null;
  resources?: ResourceCreateNestedManyWithoutKeywordsInput;
};
