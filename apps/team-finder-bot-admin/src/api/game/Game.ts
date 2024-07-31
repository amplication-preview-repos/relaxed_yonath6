import { MatchmakingRequest } from "../matchmakingRequest/MatchmakingRequest";
import { Team } from "../team/Team";

export type Game = {
  createdAt: Date;
  genre: string | null;
  id: string;
  matchmakingRequests?: Array<MatchmakingRequest>;
  platform: string | null;
  teams?: Array<Team>;
  title: string | null;
  updatedAt: Date;
};
