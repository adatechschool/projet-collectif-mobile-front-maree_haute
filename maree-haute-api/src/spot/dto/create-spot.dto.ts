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
import { User } from 'src/user/entities/user.entity';
import { List } from 'src/list/entities/list.entity';

export class Photo {
  @IsUrl({ require_tld: false })
  url: string;
}

export class CreateSpotDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destination: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  difficulty_Level: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  surf_Break: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => Photo)
  photos?: { url: string }[];

  @ApiProperty()
  @IsNotEmpty()
  peak_Surf_Season_Begins: number;

  @ApiProperty()
  @IsNotEmpty()
  peak_Surf_Season_Ends: number;

  @ApiProperty()
  GPS?: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  creator: User;

  @ApiProperty()
  list: List;

  // @ApiProperty()
  // Liked: boolean;
}
