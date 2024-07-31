import { SortOrder } from "../../util/SortOrder";

export type MatchmakingRequestOrderByInput = {
  createdAt?: SortOrder;
  gameId?: SortOrder;
  gameLookup?: SortOrder;
  id?: SortOrder;
  requestCreatedAt?: SortOrder;
  requestStatus?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userLookup?: SortOrder;
};
