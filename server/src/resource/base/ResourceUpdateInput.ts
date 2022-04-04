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
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { KeywordUpdateManyWithoutResourcesInput } from "./KeywordUpdateManyWithoutResourcesInput";
import { Type } from "class-transformer";
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
  authorS?: string | null;

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
  keywords?: KeywordUpdateManyWithoutResourcesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  relaseDate?: Date | null;
}
export { ResourceUpdateInput };
