class TermoClinicoDto {
  sistema: 'SNOMED-CT' | 'ICD-11' | 'LOINC';
  codigo: string;
  display: string;
}

export class CreateAtendimentoDto {
  pacienteId: string;
  
  achados_sintomas: TermoClinicoDto[]; 

  texto_livre_medico?: string;

  diagnosticos: TermoClinicoDto[];
}