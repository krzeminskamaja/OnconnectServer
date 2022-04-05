import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KeywordService } from "./keyword.service";
import { KeywordControllerBase } from "./base/keyword.controller.base";

@swagger.ApiTags("keywords")
@common.Controller("keywords")
export class KeywordController extends KeywordControllerBase {
  constructor(
    protected readonly service: KeywordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
