import { MatchmakingRequestCreateNestedManyWithoutUsersInput } from "./MatchmakingRequestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  matchmakingRequests?: MatchmakingRequestCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  userEmail?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  userPassword?: string | null;
  userUsername?: string | null;
  username: string;
};
