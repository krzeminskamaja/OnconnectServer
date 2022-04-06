import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResourceHistoryService } from "./resourceHistory.service";
import { ResourceHistoryControllerBase } from "./base/resourceHistory.controller.base";

@swagger.ApiTags("resourceHistories")
@common.Controller("resourceHistories")
export class ResourceHistoryController extends ResourceHistoryControllerBase {
  constructor(
    protected readonly service: ResourceHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
