import { Resource as TResource } from "../api/resource/Resource";

export const RESOURCE_TITLE_FIELD = "authorS";

export const ResourceTitle = (record: TResource): string => {
  return record.authorS || record.id;
};
