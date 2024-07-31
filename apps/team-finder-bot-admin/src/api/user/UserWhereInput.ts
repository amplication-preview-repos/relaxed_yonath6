import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchmakingRequestListRelationFilter } from "../matchmakingRequest/MatchmakingRequestListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  matchmakingRequests?: MatchmakingRequestListRelationFilter;
  userEmail?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  userUsername?: StringNullableFilter;
  username?: StringFilter;
};
