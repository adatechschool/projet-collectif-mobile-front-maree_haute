import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

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
    example: '[{id: "ASC"}]',
  })
  sort: { [key: string]: 'ASC' | 'DESC' };

  @IsOptional()
  @ApiProperty({
    description:
      'Filtering object, for example: [Difficulty_Level]=3 to filter by Difficulty equal to 3',
    type: String,
    example: '[{Difficulty_Level : 3}]',
  })
  filter: { [key: string]: string | number | boolean };
}
