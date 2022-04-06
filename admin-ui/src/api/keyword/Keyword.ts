import { Resource } from "../resource/Resource";
import { Synonym } from "../synonym/Synonym";
import { User } from "../user/User";

export type Keyword = {
  createdAt: Date;
  id: string;
  name: string;
  resourceID?: Array<Resource>;
  synonymID?: Array<Synonym>;
  updatedAt: Date;
  userID?: Array<User>;
};
