/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MatchmakingRequest as PrismaMatchmakingRequest,
  Game as PrismaGame,
  User as PrismaUser,
} from "@prisma/client";

export class MatchmakingRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MatchmakingRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.matchmakingRequest.count(args);
  }

  async matchmakingRequests(
    args: Prisma.MatchmakingRequestFindManyArgs
  ): Promise<PrismaMatchmakingRequest[]> {
    return this.prisma.matchmakingRequest.findMany(args);
  }
  async matchmakingRequest(
    args: Prisma.MatchmakingRequestFindUniqueArgs
  ): Promise<PrismaMatchmakingRequest | null> {
    return this.prisma.matchmakingRequest.findUnique(args);
  }
  async createMatchmakingRequest(
    args: Prisma.MatchmakingRequestCreateArgs
  ): Promise<PrismaMatchmakingRequest> {
    return this.prisma.matchmakingRequest.create(args);
  }
  async updateMatchmakingRequest(
    args: Prisma.MatchmakingRequestUpdateArgs
  ): Promise<PrismaMatchmakingRequest> {
    return this.prisma.matchmakingRequest.update(args);
  }
  async deleteMatchmakingRequest(
    args: Prisma.MatchmakingRequestDeleteArgs
  ): Promise<PrismaMatchmakingRequest> {
    return this.prisma.matchmakingRequest.delete(args);
  }

  async getGame(parentId: string): Promise<PrismaGame | null> {
    return this.prisma.matchmakingRequest
      .findUnique({
        where: { id: parentId },
      })
      .game();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.matchmakingRequest
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
