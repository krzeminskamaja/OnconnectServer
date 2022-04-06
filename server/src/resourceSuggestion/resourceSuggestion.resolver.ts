import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ResourceSuggestionResolverBase } from "./base/resourceSuggestion.resolver.base";
import { ResourceSuggestion } from "./base/ResourceSuggestion";
import { ResourceSuggestionService } from "./resourceSuggestion.service";

@graphql.Resolver(() => ResourceSuggestion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ResourceSuggestionResolver extends ResourceSuggestionResolverBase {
  constructor(
    protected readonly service: ResourceSuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
