import { InputJsonValue } from "../../types";
import { ResourceHistoryCreateNestedManyWithoutResourcesInput } from "./ResourceHistoryCreateNestedManyWithoutResourcesInput";
import { KeywordCreateNestedManyWithoutResourcesInput } from "./KeywordCreateNestedManyWithoutResourcesInput";
import { ResourceSuggestionCreateNestedManyWithoutResourcesInput } from "./ResourceSuggestionCreateNestedManyWithoutResourcesInput";

export type ResourceCreateInput = {
  abstract: string;
  authorS: InputJsonValue;
  historyID?: ResourceHistoryCreateNestedManyWithoutResourcesInput;
  keywordID?: KeywordCreateNestedManyWithoutResourcesInput;
  link: string;
  relaseDate: Date;
  suggestionID?: ResourceSuggestionCreateNestedManyWithoutResourcesInput;
  title: string;
};
