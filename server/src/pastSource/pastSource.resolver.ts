import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PastSourceResolverBase } from "./base/pastSource.resolver.base";
import { PastSource } from "./base/PastSource";
import { PastSourceService } from "./pastSource.service";

@graphql.Resolver(() => PastSource)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PastSourceResolver extends PastSourceResolverBase {
  constructor(
    protected readonly service: PastSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
