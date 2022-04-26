import { Resource } from "../resource/Resource";
import { Synonym } from "../synonym/Synonym";
import { User } from "../user/User";

export type Keyword = {
  childID?: Keyword | null;
  createdAt: Date;
  id: string;
  name: string;
  parentID?: Array<Keyword>;
  resourceID?: Array<Resource>;
  synonymID?: Array<Synonym>;
  updatedAt: Date;
  userID?: Array<User>;
};
