import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Atendimento, AtendimentoDocument } from './schemas/atendimento.schema';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';

@Injectable()
export class AtendimentoService {
  constructor(
    @InjectModel(Atendimento.name)
    private atendimentoModel: Model<AtendimentoDocument>,
  ) {}

  async create(createDto: CreateAtendimentoDto): Promise<Atendimento> {
    const novoAtendimento = new this.atendimentoModel(createDto);
    return novoAtendimento.save();
  }

  async findByPaciente(pacienteId: string): Promise<Atendimento[]> {
    return this.atendimentoModel
      .find({ pacienteId: pacienteId })
      .sort({ createdAt: -1 })
      .exec();
  }
}