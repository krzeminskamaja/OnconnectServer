import { User } from "../user/User";

export type PastSource = {
  createdAt: Date;
  id: string;
  sourceId: string;
  updatedAt: Date;
  userID?: Array<User>;
};
