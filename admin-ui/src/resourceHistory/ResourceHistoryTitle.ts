import { ResourceHistory as TResourceHistory } from "../api/resourceHistory/ResourceHistory";

export const RESOURCEHISTORY_TITLE_FIELD = "id";

export const ResourceHistoryTitle = (record: TResourceHistory): string => {
  return record.id || record.id;
};
