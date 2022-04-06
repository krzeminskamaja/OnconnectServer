import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SynonymService } from "./synonym.service";
import { SynonymControllerBase } from "./base/synonym.controller.base";

@swagger.ApiTags("synonyms")
@common.Controller("synonyms")
export class SynonymController extends SynonymControllerBase {
  constructor(
    protected readonly service: SynonymService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
