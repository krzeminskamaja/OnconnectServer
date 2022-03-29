import { User } from "../user/User";

export type CurrentSource = {
  createdAt: Date;
  id: string;
  sourceId: string | null;
  updatedAt: Date;
  userId?: Array<User>;
};
