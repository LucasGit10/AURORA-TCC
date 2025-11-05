import { Test, TestingModule } from '@nestjs/testing';
import { Icd11Service } from './icd11.service';

describe('Icd11Service', () => {
  let service: Icd11Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Icd11Service],
    }).compile();

    service = module.get<Icd11Service>(Icd11Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
