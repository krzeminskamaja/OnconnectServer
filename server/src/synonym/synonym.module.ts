import { Module } from "@nestjs/common";
import { SynonymModuleBase } from "./base/synonym.module.base";
import { SynonymService } from "./synonym.service";
import { SynonymController } from "./synonym.controller";
import { SynonymResolver } from "./synonym.resolver";

@Module({
  imports: [SynonymModuleBase],
  controllers: [SynonymController],
  providers: [SynonymService, SynonymResolver],
  exports: [SynonymService],
})
export class SynonymModule {}
