import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PastSourceService } from "./pastSource.service";
import { PastSourceControllerBase } from "./base/pastSource.controller.base";

@swagger.ApiTags("pastSources")
@common.Controller("pastSources")
export class PastSourceController extends PastSourceControllerBase {
  constructor(
    protected readonly service: PastSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
