import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type TeamUpdateInput = {
  game?: GameWhereUniqueInput | null;
  name?: string | null;
};
