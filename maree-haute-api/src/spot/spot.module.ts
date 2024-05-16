import { Module } from '@nestjs/common';
import { SpotService } from './spot.service';
import { SpotController } from './spot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spot } from 'src/spot/entities/spot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spot])],
  controllers: [SpotController],
  providers: [SpotService],
})
export class SpotModule {}
