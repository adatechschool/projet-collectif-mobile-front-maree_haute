import { Module } from '@nestjs/common';
import { SpotsService } from './spot.service';
import { SpotsController } from './spots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spot } from 'src/spots/entities/spots.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spot])],
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
