import { Game } from "../game/Game";
import { User } from "../user/User";

export type MatchmakingRequest = {
  createdAt: Date;
  game?: Game | null;
  gameLookup: string | null;
  id: string;
  requestCreatedAt: Date | null;
  requestStatus: string | null;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
  userLookup: string | null;
};
