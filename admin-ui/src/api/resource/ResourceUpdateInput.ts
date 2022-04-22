import { InputJsonValue } from "../../types";
import { ResourceHistoryUpdateManyWithoutResourcesInput } from "./ResourceHistoryUpdateManyWithoutResourcesInput";
import { KeywordUpdateManyWithoutResourcesInput } from "./KeywordUpdateManyWithoutResourcesInput";
import { ResourceSuggestionUpdateManyWithoutResourcesInput } from "./ResourceSuggestionUpdateManyWithoutResourcesInput";

export type ResourceUpdateInput = {
  abstract?: string;
  authors?: InputJsonValue;
  historyID?: ResourceHistoryUpdateManyWithoutResourcesInput;
  keywordID?: KeywordUpdateManyWithoutResourcesInput;
  link?: string;
  relaseDate?: Date;
  resourceType?: "Article" | "Podcast" | "Video";
  suggestionID?: ResourceSuggestionUpdateManyWithoutResourcesInput;
  title?: string;
};
