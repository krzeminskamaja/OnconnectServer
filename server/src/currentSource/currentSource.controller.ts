import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CurrentSourceService } from "./currentSource.service";
import { CurrentSourceControllerBase } from "./base/currentSource.controller.base";

@swagger.ApiTags("currentSources")
@common.Controller("currentSources")
export class CurrentSourceController extends CurrentSourceControllerBase {
  constructor(
    protected readonly service: CurrentSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
