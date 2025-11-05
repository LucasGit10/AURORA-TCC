import { Test, TestingModule } from '@nestjs/testing';
import { TerminologiaController } from './terminologia.controller';

describe('TerminologiaController', () => {
  let controller: TerminologiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerminologiaController],
    }).compile();

    controller = module.get<TerminologiaController>(TerminologiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
