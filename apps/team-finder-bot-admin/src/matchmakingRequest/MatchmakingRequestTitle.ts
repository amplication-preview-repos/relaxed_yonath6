import { MatchmakingRequest as TMatchmakingRequest } from "../api/matchmakingRequest/MatchmakingRequest";

export const MATCHMAKINGREQUEST_TITLE_FIELD = "gameLookup";

export const MatchmakingRequestTitle = (
  record: TMatchmakingRequest
): string => {
  return record.gameLookup?.toString() || String(record.id);
};
