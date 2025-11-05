import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class TermoClinico {
  @Prop({ required: true, enum: ['SNOMED-CT', 'ICD-11', 'LOINC'] })
  sistema: string;

  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  display: string;
}

export type TermoClinicoDocument = TermoClinico & Document;
export const TermoClinicoSchema = SchemaFactory.createForClass(TermoClinico);