import { MatchmakingRequest } from "../matchmakingRequest/MatchmakingRequest";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  matchmakingRequests?: Array<MatchmakingRequest>;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  userPassword: string | null;
  userUsername: string | null;
  username: string;
};
