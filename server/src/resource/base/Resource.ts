/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsJSON,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { ResourceHistory } from "../../resourceHistory/base/ResourceHistory";
import { Keyword } from "../../keyword/base/Keyword";
import { ResourceSuggestion } from "../../resourceSuggestion/base/ResourceSuggestion";
@ObjectType()
class Resource {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  abstract!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  authorS!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [ResourceHistory],
  })
  @ValidateNested()
  @Type(() => ResourceHistory)
  @IsOptional()
  historyID?: Array<ResourceHistory>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [Keyword],
  })
  @ValidateNested()
  @Type(() => Keyword)
  @IsOptional()
  keywordID?: Array<Keyword>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  link!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  relaseDate!: Date;

  @ApiProperty({
    required: false,
    type: () => [ResourceSuggestion],
  })
  @ValidateNested()
  @Type(() => ResourceSuggestion)
  @IsOptional()
  suggestionID?: Array<ResourceSuggestion>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Resource };
