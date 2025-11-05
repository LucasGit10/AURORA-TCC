import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Atendimento, AtendimentoSchema } from './schemas/atendimento.schema';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Atendimento.name, schema: AtendimentoSchema },
    ]),
  ],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
})
export class AtendimentoModule {}