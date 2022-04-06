import { Resource } from "../resource/Resource";
import { User } from "../user/User";

export type ResourceSuggestion = {
  createdAt: Date;
  id: string;
  ResourceID?: Resource | null;
  updatedAt: Date;
  userID?: User;
};
