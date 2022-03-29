import { Module } from "@nestjs/common";
import { CurrentSourceModuleBase } from "./base/currentSource.module.base";
import { CurrentSourceService } from "./currentSource.service";
import { CurrentSourceController } from "./currentSource.controller";
import { CurrentSourceResolver } from "./currentSource.resolver";

@Module({
  imports: [CurrentSourceModuleBase],
  controllers: [CurrentSourceController],
  providers: [CurrentSourceService, CurrentSourceResolver],
  exports: [CurrentSourceService],
})
export class CurrentSourceModule {}
