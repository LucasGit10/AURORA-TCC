import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';

@Controller('atendimento')
export class AtendimentoController {
  constructor(private readonly atendimentoService: AtendimentoService) {}

  @Post()
  create(@Body() createDto: CreateAtendimentoDto) {
    return this.atendimentoService.create(createDto);
  }

  @Get('paciente/:id')
  getHistorico(@Param('id') id: string) {
    return this.atendimentoService.findByPaciente(id);
  }
}