import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';

const mockCreateDto: CreateAtendimentoDto = {
  pacienteId: 'paciente-123',
  achados_sintomas: [],
  diagnosticos: [],
};

const mockAtendimentoResult = {
  ...mockCreateDto,
  _id: 'atendimento-id-456',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockAtendimentoService = {
  create: jest.fn().mockResolvedValue(mockAtendimentoResult),
  findByPaciente: jest.fn().mockResolvedValue([mockAtendimentoResult]),
};

describe('AtendimentoController', () => {
  let controller: AtendimentoController;
  let service: AtendimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendimentoController],
      providers: [
        {
          provide: AtendimentoService,
          useValue: mockAtendimentoService,
        },
      ],
    }).compile();

    controller = module.get<AtendimentoController>(AtendimentoController);
    service = module.get<AtendimentoService>(AtendimentoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with the correct DTO', async () => {
      const result = await controller.create(mockCreateDto);

      expect(service.create).toHaveBeenCalledWith(mockCreateDto);
      expect(result).toEqual(mockAtendimentoResult);
    });
  });

  describe('getHistorico', () => {
    it('should call service.findByPaciente with the correct ID', async () => {
      const pacienteId = 'paciente-123';
      const result = await controller.getHistorico(pacienteId);

      expect(service.findByPaciente).toHaveBeenCalledWith(pacienteId);
      expect(result).toEqual([mockAtendimentoResult]);
    });
  });
});