import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SpotService } from './spot.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { FindAllParams } from './dto/find-all-params.dto';

@ApiTags('spot')
@Controller('spot')
export class SpotController {
  constructor(private readonly spotService: SpotService) {}

  @Post()
  @ApiOperation({ summary: 'Create spot' })
  @ApiResponse({
    status: 201,
    description: 'The spot has been successfully created.',
  })
  create(@Body(new ValidationPipe()) createSpotDto: CreateSpotDto) {
    return this.spotService.create(createSpotDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all spot' })
  @ApiResponse({ status: 200, description: 'Return all spot.' })
  findAll(@Query() params: FindAllParams) {
    return this.spotService.findAll(params);
  }

  @Get('save')
  async getSpots(@Query('ids') ids: string) {
    const idsArray = ids.split(',').map(Number);
    return this.spotService.findMany(idsArray);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a spot by id' })
  @ApiResponse({ status: 200, description: 'Return the spot.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  findOne(@Param('id') id: string) {
    return this.spotService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a spot by id' })
  @ApiResponse({
    status: 200,
    description: 'The spot has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Not found.' })
  update(@Param('id') id: string, @Body() updateSpotDto: UpdateSpotDto) {
    return this.spotService.update(+id, updateSpotDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a spot by id' })
  @ApiResponse({
    status: 200,
    description: 'The spot has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Not found.' })
  remove(@Param('id') id: string) {
    return this.spotService.remove(+id);
  }
}
