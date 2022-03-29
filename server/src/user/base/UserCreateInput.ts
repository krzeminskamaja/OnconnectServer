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
import { CurrentSourceCreateNestedManyWithoutUsersInput } from "./CurrentSourceCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PastSourceCreateNestedManyWithoutUsersInput } from "./PastSourceCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CurrentSourceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CurrentSourceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CurrentSourceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  currentSourceID?: CurrentSourceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PastSourceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PastSourceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PastSourceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  pastSourceId?: PastSourceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  profession!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  workplace!: string;
}
export { UserCreateInput };
