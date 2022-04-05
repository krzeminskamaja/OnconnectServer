import { Module } from "@nestjs/common";
import { ResourceHistoryModuleBase } from "./base/resourceHistory.module.base";
import { ResourceHistoryService } from "./resourceHistory.service";
import { ResourceHistoryController } from "./resourceHistory.controller";
import { ResourceHistoryResolver } from "./resourceHistory.resolver";

@Module({
  imports: [ResourceHistoryModuleBase],
  controllers: [ResourceHistoryController],
  providers: [ResourceHistoryService, ResourceHistoryResolver],
  exports: [ResourceHistoryService],
})
export class ResourceHistoryModule {}
