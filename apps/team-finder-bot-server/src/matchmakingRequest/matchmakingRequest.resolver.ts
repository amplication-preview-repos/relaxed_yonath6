import * as graphql from "@nestjs/graphql";
import { MatchmakingRequestResolverBase } from "./base/matchmakingRequest.resolver.base";
import { MatchmakingRequest } from "./base/MatchmakingRequest";
import { MatchmakingRequestService } from "./matchmakingRequest.service";

@graphql.Resolver(() => MatchmakingRequest)
export class MatchmakingRequestResolver extends MatchmakingRequestResolverBase {
  constructor(protected readonly service: MatchmakingRequestService) {
    super(service);
  }
}
