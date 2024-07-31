import { Module } from "@nestjs/common";
import { MatchmakingRequestModuleBase } from "./base/matchmakingRequest.module.base";
import { MatchmakingRequestService } from "./matchmakingRequest.service";
import { MatchmakingRequestController } from "./matchmakingRequest.controller";
import { MatchmakingRequestResolver } from "./matchmakingRequest.resolver";

@Module({
  imports: [MatchmakingRequestModuleBase],
  controllers: [MatchmakingRequestController],
  providers: [MatchmakingRequestService, MatchmakingRequestResolver],
  exports: [MatchmakingRequestService],
})
export class MatchmakingRequestModule {}
