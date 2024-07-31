import { MatchmakingRequestUpdateManyWithoutUsersInput } from "./MatchmakingRequestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  matchmakingRequests?: MatchmakingRequestUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  userEmail?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  userPassword?: string | null;
  userUsername?: string | null;
  username?: string;
};
