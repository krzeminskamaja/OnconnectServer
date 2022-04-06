import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SynonymResolverBase } from "./base/synonym.resolver.base";
import { Synonym } from "./base/Synonym";
import { SynonymService } from "./synonym.service";

@graphql.Resolver(() => Synonym)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SynonymResolver extends SynonymResolverBase {
  constructor(
    protected readonly service: SynonymService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
