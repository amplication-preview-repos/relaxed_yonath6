import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatchmakingRequestServiceBase } from "./base/matchmakingRequest.service.base";

@Injectable()
export class MatchmakingRequestService extends MatchmakingRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
