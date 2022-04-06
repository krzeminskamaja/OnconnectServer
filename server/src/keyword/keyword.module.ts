import { Module } from "@nestjs/common";
import { KeywordModuleBase } from "./base/keyword.module.base";
import { KeywordService } from "./keyword.service";
import { KeywordController } from "./keyword.controller";
import { KeywordResolver } from "./keyword.resolver";

@Module({
  imports: [KeywordModuleBase],
  controllers: [KeywordController],
  providers: [KeywordService, KeywordResolver],
  exports: [KeywordService],
})
export class KeywordModule {}
