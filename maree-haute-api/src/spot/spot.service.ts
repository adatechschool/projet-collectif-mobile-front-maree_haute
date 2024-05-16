import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { Repository, FindManyOptions } from 'typeorm';
import { Spot } from './entities/Spot.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllParams } from './dto/find-all-params.dto';

/// spotService is used to perform CRUD operations on spot and encapsulate the associated business logic.
@Injectable()
export class SpotService {
  constructor(
    @InjectRepository(Spot)
    private readonly spotRepository: Repository<Spot>,
  ) {}

  async create(createSpotDto: CreateSpotDto) {
    const spot = this.spotRepository.create(createSpotDto);
    return await this.spotRepository.save(spot);
  }
  //
  async findAll(paginationOptions: FindAllParams) {
    console.log('paginationOptions', paginationOptions);

    const findOptions: FindManyOptions<Spot> = {
      order: paginationOptions.sort || { id: 'ASC' },
      take: paginationOptions.limit,
      skip: paginationOptions.offset,
      where: paginationOptions.filter,
    };

    return await this.spotRepository.find(findOptions);
  }

  async findOne(id: number) {
    return await this.spotRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSpotDto: UpdateSpotDto) {
    const spot = await this.findOne(id);
    if (!spot) {
      throw new NotFoundException(`Spot #${id} not found`);
    }
    Object.assign(spot, updateSpotDto);
    return await this.spotRepository.save(spot);
  }

  async remove(id: number) {
    const spot = await this.findOne(id);
    if (!spot) {
      throw new NotFoundException(`spot #${id} not found`);
    }
    return await this.spotRepository.remove(spot);
  }
}
