import { Synonym as TSynonym } from "../api/synonym/Synonym";

export const SYNONYM_TITLE_FIELD = "id";

export const SynonymTitle = (record: TSynonym): string => {
  return record.id || record.id;
};
