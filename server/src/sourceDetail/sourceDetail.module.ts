import { Module } from "@nestjs/common";
import { SourceDetailModuleBase } from "./base/sourceDetail.module.base";
import { SourceDetailService } from "./sourceDetail.service";
import { SourceDetailController } from "./sourceDetail.controller";
import { SourceDetailResolver } from "./sourceDetail.resolver";

@Module({
  imports: [SourceDetailModuleBase],
  controllers: [SourceDetailController],
  providers: [SourceDetailService, SourceDetailResolver],
  exports: [SourceDetailService],
})
export class SourceDetailModule {}
