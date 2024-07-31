import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchmakingRequestListRelationFilter } from "../matchmakingRequest/MatchmakingRequestListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type GameWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  matchmakingRequests?: MatchmakingRequestListRelationFilter;
  platform?: StringNullableFilter;
  teams?: TeamListRelationFilter;
  title?: StringNullableFilter;
};
