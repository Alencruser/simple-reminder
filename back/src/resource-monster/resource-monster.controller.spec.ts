import { Test, TestingModule } from '@nestjs/testing';
import { ResourceMonsterController } from './resource-monster.controller';
import { ResourceMonsterService } from './resource-monster.service';

describe('ResourceMonsterController', () => {
  let controller: ResourceMonsterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceMonsterController],
      providers: [ResourceMonsterService],
    }).compile();

    controller = module.get<ResourceMonsterController>(ResourceMonsterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
