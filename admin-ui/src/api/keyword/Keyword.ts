import { Resource } from "../resource/Resource";
import { User } from "../user/User";

export type Keyword = {
  createdAt: Date;
  id: string;
  name: string;
  resourceID?: Array<Resource>;
  updatedAt: Date;
  userID?: Array<User>;
};
