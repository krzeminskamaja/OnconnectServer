import { User } from "../user/User";
import { Resource } from "../resource/Resource";

export type Keyword = {
  createdAt: Date;
  id: string;
  interested?: Array<User>;
  keyIndex: number;
  name: string;
  resources?: Array<Resource>;
  updatedAt: Date;
};
