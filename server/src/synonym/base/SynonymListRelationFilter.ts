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
import { SynonymWhereInput } from "./SynonymWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SynonymListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SynonymWhereInput,
  })
  @ValidateNested()
  @Type(() => SynonymWhereInput)
  @IsOptional()
  @Field(() => SynonymWhereInput, {
    nullable: true,
  })
  every?: SynonymWhereInput;

  @ApiProperty({
    required: false,
    type: () => SynonymWhereInput,
  })
  @ValidateNested()
  @Type(() => SynonymWhereInput)
  @IsOptional()
  @Field(() => SynonymWhereInput, {
    nullable: true,
  })
  some?: SynonymWhereInput;

  @ApiProperty({
    required: false,
    type: () => SynonymWhereInput,
  })
  @ValidateNested()
  @Type(() => SynonymWhereInput)
  @IsOptional()
  @Field(() => SynonymWhereInput, {
    nullable: true,
  })
  none?: SynonymWhereInput;
}
export { SynonymListRelationFilter };
