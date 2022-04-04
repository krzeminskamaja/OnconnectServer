import { JsonValue } from "type-fest";
import { CurrentSource } from "../currentSource/CurrentSource";
import { Keyword } from "../keyword/Keyword";
import { PastSource } from "../pastSource/PastSource";

export type User = {
  calendar: JsonValue;
  createdAt: Date;
  currentSourceID?: Array<CurrentSource>;
  firstName: string | null;
  id: string;
  intersts?: Array<Keyword>;
  lastName: string | null;
  pastSourceId?: Array<PastSource>;
  profession: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  workplace: string;
};
