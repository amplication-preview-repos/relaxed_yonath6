import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchmakingRequestCreateInput = {
  game?: GameWhereUniqueInput | null;
  gameLookup?: string | null;
  requestCreatedAt?: Date | null;
  requestStatus?: string | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
  userLookup?: string | null;
};
