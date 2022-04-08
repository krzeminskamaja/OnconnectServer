import { Resource } from "../resource/Resource";
import { User } from "../user/User";

export type ResourceHistory = {
  createdAt: Date;
  id: string;
  readDate: Date | null;
  sourceID?: Resource;
  updatedAt: Date;
  userID?: User;
};
