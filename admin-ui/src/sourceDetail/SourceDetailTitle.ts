import { SourceDetail as TSourceDetail } from "../api/sourceDetail/SourceDetail";

export const SOURCEDETAIL_TITLE_FIELD = "title";

export const SourceDetailTitle = (record: TSourceDetail): string => {
  return record.title || record.id;
};
