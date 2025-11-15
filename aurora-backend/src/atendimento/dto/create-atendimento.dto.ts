import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TermoClinicoInputDto } from './termo-clinico-input.dto';

export class CreateAtendimentoDto {
  @IsString()
  @IsNotEmpty()
  pacienteId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TermoClinicoInputDto)
  @IsOptional()
  achados_sintomas: TermoClinicoInputDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TermoClinicoInputDto)
  @IsOptional()
  diagnosticos: TermoClinicoInputDto[];

  @IsString()
  @IsOptional()
  texto_livre_medico?: string;
}