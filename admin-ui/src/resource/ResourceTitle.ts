import { Resource as TResource } from "../api/resource/Resource";

export const RESOURCE_TITLE_FIELD = "title";

export const ResourceTitle = (record: TResource): string => {
  return record.title || record.id;
};
