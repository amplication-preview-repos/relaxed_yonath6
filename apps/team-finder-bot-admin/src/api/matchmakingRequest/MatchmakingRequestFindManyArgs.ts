import { MatchmakingRequestWhereInput } from "./MatchmakingRequestWhereInput";
import { MatchmakingRequestOrderByInput } from "./MatchmakingRequestOrderByInput";

export type MatchmakingRequestFindManyArgs = {
  where?: MatchmakingRequestWhereInput;
  orderBy?: Array<MatchmakingRequestOrderByInput>;
  skip?: number;
  take?: number;
};
