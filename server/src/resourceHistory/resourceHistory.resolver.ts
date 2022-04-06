import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ResourceHistoryResolverBase } from "./base/resourceHistory.resolver.base";
import { ResourceHistory } from "./base/ResourceHistory";
import { ResourceHistoryService } from "./resourceHistory.service";

@graphql.Resolver(() => ResourceHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ResourceHistoryResolver extends ResourceHistoryResolverBase {
  constructor(
    protected readonly service: ResourceHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
