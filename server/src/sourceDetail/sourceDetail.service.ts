import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SourceDetailServiceBase } from "./base/sourceDetail.service.base";

@Injectable()
export class SourceDetailService extends SourceDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
