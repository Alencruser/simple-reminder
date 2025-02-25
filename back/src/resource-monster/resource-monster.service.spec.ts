import { Test, TestingModule } from '@nestjs/testing';
import { ResourceMonsterService } from './resource-monster.service';

describe('ResourceMonsterService', () => {
  let service: ResourceMonsterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceMonsterService],
    }).compile();

    service = module.get<ResourceMonsterService>(ResourceMonsterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
