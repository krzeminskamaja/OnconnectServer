import { Keyword } from "../keyword/Keyword";

export type Resource = {
  authorS: string | null;
  createdAt: Date;
  id: string;
  keywords?: Array<Keyword>;
  relaseDate: Date | null;
  updatedAt: Date;
};
