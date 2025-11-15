import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class TermoClinicoInputDto {
  @IsEnum(['SNOMED-CT', 'ICD-11', 'LOINC'])
  @IsNotEmpty()
  sistema: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  display: string;
}