import { UserUpdateManyWithoutKeywordsInput } from "./UserUpdateManyWithoutKeywordsInput";
import { KeywordUpdateManyWithoutKeywordsInput } from "./KeywordUpdateManyWithoutKeywordsInput";
import { KeywordWhereUniqueInput } from "./KeywordWhereUniqueInput";
import { ResourceUpdateManyWithoutKeywordsInput } from "./ResourceUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  interested?: UserUpdateManyWithoutKeywordsInput;
  keyIndex?: number | null;
  keywords?: KeywordUpdateManyWithoutKeywordsInput;
  name?: string | null;
  parentKeyword?: KeywordWhereUniqueInput | null;
  resources?: ResourceUpdateManyWithoutKeywordsInput;
};
