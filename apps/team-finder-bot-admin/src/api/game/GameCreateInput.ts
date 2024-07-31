import { MatchmakingRequestCreateNestedManyWithoutGamesInput } from "./MatchmakingRequestCreateNestedManyWithoutGamesInput";
import { TeamCreateNestedManyWithoutGamesInput } from "./TeamCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  genre?: string | null;
  matchmakingRequests?: MatchmakingRequestCreateNestedManyWithoutGamesInput;
  platform?: string | null;
  teams?: TeamCreateNestedManyWithoutGamesInput;
  title?: string | null;
};
