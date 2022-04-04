import { InputJsonValue } from "../../types";
import { KeywordUpdateManyWithoutResourcesInput } from "./KeywordUpdateManyWithoutResourcesInput";

export type ResourceUpdateInput = {
  abstract?: string;
  authorS?: InputJsonValue;
  keywords?: KeywordUpdateManyWithoutResourcesInput;
  link?: string;
  relaseDate?: Date;
  title?: string;
};
