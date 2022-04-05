/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsJSON,
  ValidateNested,
  IsDate,
} from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ResourceHistoryUpdateManyWithoutResourcesInput } from "./ResourceHistoryUpdateManyWithoutResourcesInput";
import { Type } from "class-transformer";
import { KeywordUpdateManyWithoutResourcesInput } from "./KeywordUpdateManyWithoutResourcesInput";
import { ResourceSuggestionUpdateManyWithoutResourcesInput } from "./ResourceSuggestionUpdateManyWithoutResourcesInput";
@InputType()
class ResourceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  abstract?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  authorS?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ResourceHistoryUpdateManyWithoutResourcesInput,
  })
  @ValidateNested()
  @Type(() => ResourceHistoryUpdateManyWithoutResourcesInput)
  @IsOptional()
  @Field(() => ResourceHistoryUpdateManyWithoutResourcesInput, {
    nullable: true,
  })
  historyID?: ResourceHistoryUpdateManyWithoutResourcesInput;

  @ApiProperty({
    required: false,
    type: () => KeywordUpdateManyWithoutResourcesInput,
  })
  @ValidateNested()
  @Type(() => KeywordUpdateManyWithoutResourcesInput)
  @IsOptional()
  @Field(() => KeywordUpdateManyWithoutResourcesInput, {
    nullable: true,
  })
  keywordID?: KeywordUpdateManyWithoutResourcesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  relaseDate?: Date;

  @ApiProperty({
    required: false,
    type: () => ResourceSuggestionUpdateManyWithoutResourcesInput,
  })
  @ValidateNested()
  @Type(() => ResourceSuggestionUpdateManyWithoutResourcesInput)
  @IsOptional()
  @Field(() => ResourceSuggestionUpdateManyWithoutResourcesInput, {
    nullable: true,
  })
  suggestionID?: ResourceSuggestionUpdateManyWithoutResourcesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { ResourceUpdateInput };
