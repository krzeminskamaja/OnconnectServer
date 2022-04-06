import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { KeywordServiceBase } from "./base/keyword.service.base";

@Injectable()
export class KeywordService extends KeywordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
