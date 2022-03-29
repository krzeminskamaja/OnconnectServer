import { Module } from "@nestjs/common";
import { PastSourceModuleBase } from "./base/pastSource.module.base";
import { PastSourceService } from "./pastSource.service";
import { PastSourceController } from "./pastSource.controller";
import { PastSourceResolver } from "./pastSource.resolver";

@Module({
  imports: [PastSourceModuleBase],
  controllers: [PastSourceController],
  providers: [PastSourceService, PastSourceResolver],
  exports: [PastSourceService],
})
export class PastSourceModule {}
