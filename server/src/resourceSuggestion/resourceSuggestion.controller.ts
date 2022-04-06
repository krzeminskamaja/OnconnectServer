import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResourceSuggestionService } from "./resourceSuggestion.service";
import { ResourceSuggestionControllerBase } from "./base/resourceSuggestion.controller.base";

@swagger.ApiTags("resourceSuggestions")
@common.Controller("resourceSuggestions")
export class ResourceSuggestionController extends ResourceSuggestionControllerBase {
  constructor(
    protected readonly service: ResourceSuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
