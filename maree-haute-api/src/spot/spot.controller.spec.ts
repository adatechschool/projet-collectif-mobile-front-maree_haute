import { Test, TestingModule } from '@nestjs/testing';
import { SpotController } from './spot.controller';
import { SpotService } from './spot.service';

describe('spotController', () => {
  let controller: SpotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotController],
      providers: [SpotService],
    }).compile();

    controller = module.get<SpotController>(SpotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
