import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ResourceSuggestionServiceBase } from "./base/resourceSuggestion.service.base";

@Injectable()
export class ResourceSuggestionService extends ResourceSuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
