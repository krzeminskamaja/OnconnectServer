import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CurrentSourceServiceBase } from "./base/currentSource.service.base";

@Injectable()
export class CurrentSourceService extends CurrentSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
