import { InputJsonValue } from "../../types";
import { ResourceHistoryUpdateManyWithoutResourcesInput } from "./ResourceHistoryUpdateManyWithoutResourcesInput";
import { KeywordUpdateManyWithoutResourcesInput } from "./KeywordUpdateManyWithoutResourcesInput";
import { ResourceSuggestionUpdateManyWithoutResourcesInput } from "./ResourceSuggestionUpdateManyWithoutResourcesInput";

export type ResourceUpdateInput = {
  abstract?: string;
  authorS?: InputJsonValue;
  historyID?: ResourceHistoryUpdateManyWithoutResourcesInput;
  keywordID?: KeywordUpdateManyWithoutResourcesInput;
  link?: string;
  relaseDate?: Date;
  suggestionID?: ResourceSuggestionUpdateManyWithoutResourcesInput;
  title?: string;
};
