import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type TeamCreateInput = {
  game?: GameWhereUniqueInput | null;
  name?: string | null;
};
