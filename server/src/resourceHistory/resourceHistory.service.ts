import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ResourceHistoryServiceBase } from "./base/resourceHistory.service.base";

@Injectable()
export class ResourceHistoryService extends ResourceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
