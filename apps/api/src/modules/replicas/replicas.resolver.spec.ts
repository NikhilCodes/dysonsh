import { Test, TestingModule } from '@nestjs/testing';
import { ReplicasResolver } from './replicas.resolver';
import { ReplicasService } from './replicas.service';

describe('ReplicasResolver', () => {
  let resolver: ReplicasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplicasResolver, ReplicasService],
    }).compile();

    resolver = module.get<ReplicasResolver>(ReplicasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
