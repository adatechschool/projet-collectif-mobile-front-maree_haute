import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Photo {
  @IsUrl({ require_tld: false })
  url: string;
}

export class CreateSpotDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Destination: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Address?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  Difficulty_Level: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  Surf_Break: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => Photo)
  Photos?: { url: string }[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Peak_Surf_Season_Begins: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Peak_Surf_Season_Ends: string;

  @ApiProperty()
  GPS?: string;

  @ApiProperty()
  Description: string;

  // @ApiProperty()
  // Liked: boolean;
}
