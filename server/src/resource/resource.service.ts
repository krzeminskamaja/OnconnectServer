import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ResourceServiceBase } from "./base/resource.service.base";

@Injectable()
export class ResourceService extends ResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
