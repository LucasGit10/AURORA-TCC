import { Test, TestingModule } from '@nestjs/testing';
import { SnomedService } from './snomed.service';

describe('SnomedService', () => {
  let service: SnomedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnomedService],
    }).compile();

    service = module.get<SnomedService>(SnomedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
