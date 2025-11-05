import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TermoClinico, TermoClinicoSchema } from '../../shared/schemas/termo_clinico.schema';

@Schema({ timestamps: true })
export class Atendimento {
  @Prop({ required: true })
  pacienteId: string;

  @Prop({ type: [TermoClinicoSchema], default: [] })
  achados_sintomas: TermoClinico[];

  @Prop()
  texto_livre_medico: string;

  @Prop({ type: [TermoClinicoSchema], default: [] })
  diagnosticos: TermoClinico[];
}

export type AtendimentoDocument = Atendimento & Document;
export const AtendimentoSchema = SchemaFactory.createForClass(Atendimento);