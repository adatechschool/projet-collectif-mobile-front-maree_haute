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
  Destination_State_Country: string; // Modifier le nom de la propriété

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  Difficulty_Level: number; // Modifier le nom de la propriété

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  Surf_Break: string[]; // Modifier le nom de la propriété

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => Photo)
  Photos?: { url: string }[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Peak_Surf_Season_Begins: string; // Modifier le nom de la propriété

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Peak_Surf_Season_Ends: string; // Modifier le nom de la propriété

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  Magic_Seaweed_Link?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  Influencers?: string[];

  @ApiProperty()
  Geocode: string;

  @ApiProperty()
  Description: string;

  @ApiProperty()
  Liked: boolean;
}

export class FindAllParams {
  @IsOptional()
  @ApiProperty({
    description: 'Maximum number of results to return',
    type: Number,
    example: 10,
  })
  limit: number = 10;

  @IsOptional()
  @ApiProperty({
    description:
      'Number of results to skip before starting to return the results',
    type: Number,
    example: 0,
  })
  offset: number = 0;
  @IsOptional()
  @ApiProperty({
    description:
      'Sorting object, for example: [id]=ASC to sort by id in ascending order',
    type: String,
    example: '[id]=ASC',
  })
  sort: { [key: string]: 'ASC' | 'DESC' };
}
