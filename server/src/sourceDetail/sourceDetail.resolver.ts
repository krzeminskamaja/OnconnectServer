import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SourceDetailResolverBase } from "./base/sourceDetail.resolver.base";
import { SourceDetail } from "./base/SourceDetail";
import { SourceDetailService } from "./sourceDetail.service";

@graphql.Resolver(() => SourceDetail)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SourceDetailResolver extends SourceDetailResolverBase {
  constructor(
    protected readonly service: SourceDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
