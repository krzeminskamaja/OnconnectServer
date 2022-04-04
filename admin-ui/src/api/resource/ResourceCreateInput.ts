import { KeywordCreateNestedManyWithoutResourcesInput } from "./KeywordCreateNestedManyWithoutResourcesInput";

export type ResourceCreateInput = {
  authorS?: string | null;
  keywords?: KeywordCreateNestedManyWithoutResourcesInput;
  relaseDate?: Date | null;
};
