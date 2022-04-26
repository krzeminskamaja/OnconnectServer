import { Resource } from "../resource/Resource";
import { User } from "../user/User";

export type ResourceSuggestion = {
  createdAt: Date;
  id: string;
  priority: number;
  ResourceID?: Resource;
  updatedAt: Date;
  userID?: User;
};
