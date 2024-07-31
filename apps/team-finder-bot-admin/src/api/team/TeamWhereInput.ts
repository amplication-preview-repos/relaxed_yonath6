import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeamWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
