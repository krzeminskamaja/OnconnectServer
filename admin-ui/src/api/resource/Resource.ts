import { JsonValue } from "type-fest";
import { Keyword } from "../keyword/Keyword";

export type Resource = {
  abstract: string;
  authorS: JsonValue;
  createdAt: Date;
  id: string;
  keywords?: Array<Keyword>;
  link: string;
  relaseDate: Date;
  title: string;
  updatedAt: Date;
};
