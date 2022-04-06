import { Synonym as TSynonym } from "../api/synonym/Synonym";

export const SYNONYM_TITLE_FIELD = "name";

export const SynonymTitle = (record: TSynonym): string => {
  return record.name || record.id;
};
