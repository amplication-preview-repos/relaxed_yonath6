/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MatchmakingRequestWhereInput } from "./MatchmakingRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MatchmakingRequestOrderByInput } from "./MatchmakingRequestOrderByInput";

@ArgsType()
class MatchmakingRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MatchmakingRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MatchmakingRequestWhereInput, { nullable: true })
  @Type(() => MatchmakingRequestWhereInput)
  where?: MatchmakingRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [MatchmakingRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MatchmakingRequestOrderByInput], { nullable: true })
  @Type(() => MatchmakingRequestOrderByInput)
  orderBy?: Array<MatchmakingRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MatchmakingRequestFindManyArgs as MatchmakingRequestFindManyArgs };
