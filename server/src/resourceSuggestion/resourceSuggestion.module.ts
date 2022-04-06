import { Module } from "@nestjs/common";
import { ResourceSuggestionModuleBase } from "./base/resourceSuggestion.module.base";
import { ResourceSuggestionService } from "./resourceSuggestion.service";
import { ResourceSuggestionController } from "./resourceSuggestion.controller";
import { ResourceSuggestionResolver } from "./resourceSuggestion.resolver";

@Module({
  imports: [ResourceSuggestionModuleBase],
  controllers: [ResourceSuggestionController],
  providers: [ResourceSuggestionService, ResourceSuggestionResolver],
  exports: [ResourceSuggestionService],
})
export class ResourceSuggestionModule {}
