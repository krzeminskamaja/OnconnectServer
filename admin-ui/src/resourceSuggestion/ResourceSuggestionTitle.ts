import { ResourceSuggestion as TResourceSuggestion } from "../api/resourceSuggestion/ResourceSuggestion";

export const RESOURCESUGGESTION_TITLE_FIELD = "id";

export const ResourceSuggestionTitle = (
  record: TResourceSuggestion
): string => {
  return record.id || record.id;
};
