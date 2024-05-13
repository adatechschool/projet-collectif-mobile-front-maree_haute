import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { Repository, FindManyOptions } from 'typeorm';
import { Spot } from './entities/spots.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllParams } from './dto/find-all-params.dto';

/// SpotsService is used to perform CRUD operations on spots and encapsulate the associated business logic.
@Injectable()
export class SpotsService {
  constructor(
    @InjectRepository(Spot)
    private readonly spotsRepository: Repository<Spot>,
  ) {}

  async create(createSpotDto: CreateSpotDto) {
    const spot = this.spotsRepository.create(createSpotDto);
    return await this.spotsRepository.save(spot);
  }
  //
  async findAll(paginationOptions: FindAllParams) {
    console.log('paginationOptions', paginationOptions);

    const findOptions: FindManyOptions<Spot> = {
      order: paginationOptions.sort || { Destination_State_Country: 'ASC' },
      take: paginationOptions.limit,
      skip: paginationOptions.offset,
      where: paginationOptions.filter,
    };

    return await this.spotsRepository.find(findOptions);
  }

  async findOne(id: number) {
    return await this.spotsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSpotDto: UpdateSpotDto) {
    const spot = await this.findOne(id);
    if (!spot) {
      throw new NotFoundException(`City #${id} not found`);
    }
    Object.assign(spot, updateSpotDto);
    return await this.spotsRepository.save(spot);
  }

  async remove(id: number) {
    const spot = await this.findOne(id);
    if (!spot) {
      throw new NotFoundException(`spot #${id} not found`);
    }
    return await this.spotsRepository.remove(spot);
  }
}
