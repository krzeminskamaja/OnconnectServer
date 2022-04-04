import { InputJsonValue } from "../../types";
import { KeywordCreateNestedManyWithoutResourcesInput } from "./KeywordCreateNestedManyWithoutResourcesInput";

export type ResourceCreateInput = {
  abstract: string;
  authorS: InputJsonValue;
  keywords?: KeywordCreateNestedManyWithoutResourcesInput;
  link: string;
  relaseDate: Date;
  title: string;
};
