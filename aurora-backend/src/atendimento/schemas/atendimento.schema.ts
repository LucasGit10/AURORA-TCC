import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  TermoClinico,
  TermoClinicoSchema,
} from '../../shared/schemas/termo_clinico.schema';

@Schema({ timestamps: true })
export class Atendimento {
  @Prop({ required: true, index: true })
  pacienteId: string;

  @Prop({ type: [TermoClinicoSchema], default: [] })
  achados_sintomas: TermoClinico[];

  @Prop({ type: [TermoClinicoSchema], default: [] })
  diagnosticos: TermoClinico[];

  @Prop({ type: String, default: '' })
  texto_livre_medico: string;
}

export type AtendimentoDocument = Atendimento & Document;
export const AtendimentoSchema = SchemaFactory.createForClass(Atendimento);