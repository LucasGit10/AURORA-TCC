import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtendimentoService } from './atendimento.service';
import { Atendimento, AtendimentoDocument } from './schemas/atendimento.schema';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';

const mockCreateDto: CreateAtendimentoDto = {
  pacienteId: 'paciente-123',
  achados_sintomas: [],
  diagnosticos: [
    {
      sistema: 'ICD-11',
      codigo: '1E30.0',
      display: 'Gripe',
    },
  ],
  texto_livre_medico: 'Paciente com febre.',
};

const mockAtendimentoResult = {
  ...mockCreateDto,
  _id: 'atendimento-id-456',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockExec = jest.fn().mockResolvedValue([mockAtendimentoResult]);
const mockSort = jest.fn(() => ({ exec: mockExec }));
const mockFind = jest.fn(() => ({ sort: mockSort }));

const mockSave = jest.fn().mockResolvedValue(mockAtendimentoResult);
const mockAtendimentoModel = {
  new: jest.fn().mockImplementation((dto) => ({
    ...dto,
    save: mockSave,
  })),
  find: mockFind,
};

describe('AtendimentoService', () => {
  let service: AtendimentoService;
  let model: Model<AtendimentoDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AtendimentoService,
        {
          provide: getModelToken(Atendimento.name),
          useValue: mockAtendimentoModel,
        },
      ],
    }).compile();

    service = module.get<AtendimentoService>(AtendimentoService);
    model = module.get<Model<AtendimentoDocument>>(getModelToken(Atendimento.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new atendimento', async () => {
      const result = await service.create(mockCreateDto);

      expect(mockAtendimentoModel.new).toHaveBeenCalledWith(mockCreateDto);
      expect(mockSave).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockAtendimentoResult);
    });
  });

  describe('findByPaciente', () => {
    it('should find all atendimentos for a pacienteId and sort them', async () => {
      const pacienteId = 'paciente-123';
      const result = await service.findByPaciente(pacienteId);

      expect(mockFind).toHaveBeenCalledWith({ pacienteId: pacienteId });
      expect(mockSort).toHaveBeenCalledWith({ createdAt: -1 });
      expect(mockExec).toHaveBeenCalledTimes(1);

      expect(result).toEqual([mockAtendimentoResult]);
    });
  });
});
