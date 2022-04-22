import { InputJsonValue } from "../../types";
import { ResourceHistoryCreateNestedManyWithoutResourcesInput } from "./ResourceHistoryCreateNestedManyWithoutResourcesInput";
import { KeywordCreateNestedManyWithoutResourcesInput } from "./KeywordCreateNestedManyWithoutResourcesInput";
import { ResourceSuggestionCreateNestedManyWithoutResourcesInput } from "./ResourceSuggestionCreateNestedManyWithoutResourcesInput";

export type ResourceCreateInput = {
  abstract: string;
  authors: InputJsonValue;
  historyID?: ResourceHistoryCreateNestedManyWithoutResourcesInput;
  keywordID?: KeywordCreateNestedManyWithoutResourcesInput;
  link: string;
  relaseDate: Date;
  resourceType: "Article" | "Podcast" | "Video";
  suggestionID?: ResourceSuggestionCreateNestedManyWithoutResourcesInput;
  title: string;
};
