import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PastSourceServiceBase } from "./base/pastSource.service.base";

@Injectable()
export class PastSourceService extends PastSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
