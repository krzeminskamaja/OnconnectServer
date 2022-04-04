import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { KeywordResolverBase } from "./base/keyword.resolver.base";
import { Keyword } from "./base/Keyword";
import { KeywordService } from "./keyword.service";

@graphql.Resolver(() => Keyword)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class KeywordResolver extends KeywordResolverBase {
  constructor(
    protected readonly service: KeywordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
