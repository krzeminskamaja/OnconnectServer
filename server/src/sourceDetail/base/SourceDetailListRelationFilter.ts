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
import { SourceDetailWhereInput } from "./SourceDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SourceDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SourceDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SourceDetailWhereInput)
  @IsOptional()
  @Field(() => SourceDetailWhereInput, {
    nullable: true,
  })
  every?: SourceDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SourceDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SourceDetailWhereInput)
  @IsOptional()
  @Field(() => SourceDetailWhereInput, {
    nullable: true,
  })
  some?: SourceDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SourceDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SourceDetailWhereInput)
  @IsOptional()
  @Field(() => SourceDetailWhereInput, {
    nullable: true,
  })
  none?: SourceDetailWhereInput;
}
export { SourceDetailListRelationFilter };