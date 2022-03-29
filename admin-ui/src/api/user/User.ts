import { CurrentSource } from "../currentSource/CurrentSource";
import { PastSource } from "../pastSource/PastSource";

export type User = {
  createdAt: Date;
  currentSourceID?: Array<CurrentSource>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pastSourceId?: Array<PastSource>;
  profession: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  workplace: string;
};
