import { Keyword as TKeyword } from "../api/keyword/Keyword";

export const KEYWORD_TITLE_FIELD = "name";

export const KeywordTitle = (record: TKeyword): string => {
  return record.name || record.id;
};
