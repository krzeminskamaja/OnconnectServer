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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserCreateNestedManyWithoutCurrentSourcesInput } from "./UserCreateNestedManyWithoutCurrentSourcesInput";
import { Type } from "class-transformer";
@InputType()
class CurrentSourceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sourceId?: string | null;

  @ApiProperty({
    required: true,
    type: () => UserCreateNestedManyWithoutCurrentSourcesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCurrentSourcesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCurrentSourcesInput, {
    nullable: true,
  })
  userId?: UserCreateNestedManyWithoutCurrentSourcesInput;
}
export { CurrentSourceCreateInput };
