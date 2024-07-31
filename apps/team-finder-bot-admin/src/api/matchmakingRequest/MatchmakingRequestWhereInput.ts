import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchmakingRequestWhereInput = {
  game?: GameWhereUniqueInput;
  gameLookup?: StringNullableFilter;
  id?: StringFilter;
  requestCreatedAt?: DateTimeNullableFilter;
  requestStatus?: StringNullableFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userLookup?: StringNullableFilter;
};
