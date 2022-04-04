import { User } from "../user/User";
import { Resource } from "../resource/Resource";

export type Keyword = {
  createdAt: Date;
  id: string;
  interested?: Array<User>;
  keyIndex: number | null;
  keywords?: Array<Keyword>;
  name: string | null;
  parentKeyword?: Keyword | null;
  resources?: Array<Resource>;
  updatedAt: Date;
};
