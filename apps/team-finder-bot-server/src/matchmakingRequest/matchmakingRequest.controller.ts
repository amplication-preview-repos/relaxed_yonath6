import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MatchmakingRequestService } from "./matchmakingRequest.service";
import { MatchmakingRequestControllerBase } from "./base/matchmakingRequest.controller.base";

@swagger.ApiTags("matchmakingRequests")
@common.Controller("matchmakingRequests")
export class MatchmakingRequestController extends MatchmakingRequestControllerBase {
  constructor(protected readonly service: MatchmakingRequestService) {
    super(service);
  }
}
