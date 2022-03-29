import { CurrentSource as TCurrentSource } from "../api/currentSource/CurrentSource";

export const CURRENTSOURCE_TITLE_FIELD = "sourceId";

export const CurrentSourceTitle = (record: TCurrentSource): string => {
  return record.sourceId || record.id;
};
