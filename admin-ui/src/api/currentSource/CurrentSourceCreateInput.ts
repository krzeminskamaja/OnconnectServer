import { UserCreateNestedManyWithoutCurrentSourcesInput } from "./UserCreateNestedManyWithoutCurrentSourcesInput";

export type CurrentSourceCreateInput = {
  sourceId?: string | null;
  userId?: UserCreateNestedManyWithoutCurrentSourcesInput;
};
