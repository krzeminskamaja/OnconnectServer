import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CurrentSourceResolverBase } from "./base/currentSource.resolver.base";
import { CurrentSource } from "./base/CurrentSource";
import { CurrentSourceService } from "./currentSource.service";

@graphql.Resolver(() => CurrentSource)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CurrentSourceResolver extends CurrentSourceResolverBase {
  constructor(
    protected readonly service: CurrentSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
