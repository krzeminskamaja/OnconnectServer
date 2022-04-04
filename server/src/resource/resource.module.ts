import { Module } from "@nestjs/common";
import { ResourceModuleBase } from "./base/resource.module.base";
import { ResourceService } from "./resource.service";
import { ResourceController } from "./resource.controller";
import { ResourceResolver } from "./resource.resolver";

@Module({
  imports: [ResourceModuleBase],
  controllers: [ResourceController],
  providers: [ResourceService, ResourceResolver],
  exports: [ResourceService],
})
export class ResourceModule {}
