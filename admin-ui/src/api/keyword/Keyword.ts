import { Resource } from "../resource/Resource";

export type Keyword = {
  createdAt: Date;
  id: string;
  keyIndex: number | null;
  name: string | null;
  resource?: Array<Resource>;
  updatedAt: Date;
};
