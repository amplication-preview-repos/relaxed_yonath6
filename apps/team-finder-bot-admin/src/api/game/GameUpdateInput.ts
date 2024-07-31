import { MatchmakingRequestUpdateManyWithoutGamesInput } from "./MatchmakingRequestUpdateManyWithoutGamesInput";
import { TeamUpdateManyWithoutGamesInput } from "./TeamUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  genre?: string | null;
  matchmakingRequests?: MatchmakingRequestUpdateManyWithoutGamesInput;
  platform?: string | null;
  teams?: TeamUpdateManyWithoutGamesInput;
  title?: string | null;
};
