import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SourceDetailService } from "./sourceDetail.service";
import { SourceDetailControllerBase } from "./base/sourceDetail.controller.base";

@swagger.ApiTags("sourceDetails")
@common.Controller("sourceDetails")
export class SourceDetailController extends SourceDetailControllerBase {
  constructor(
    protected readonly service: SourceDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
