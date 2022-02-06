import { Test, TestingModule } from '@nestjs/testing';
import { ReplicasService } from './replicas.service';

describe('ReplicasService', () => {
  let service: ReplicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplicasService],
    }).compile();

    service = module.get<ReplicasService>(ReplicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
