import { PastSource as TPastSource } from "../api/pastSource/PastSource";

export const PASTSOURCE_TITLE_FIELD = "sourceId";

export const PastSourceTitle = (record: TPastSource): string => {
  return record.sourceId || record.id;
};
