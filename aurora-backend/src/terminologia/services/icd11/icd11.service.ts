import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TerminologiaResultDto } from '../../dto/terminologia-result.dto';

@Injectable()
export class Icd11Service {
  private readonly logger = new Logger(Icd11Service.name);
  private readonly apiUrl = 'https://icd.who.int/icdapi';

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<TerminologiaResultDto[]> {
    const headers = {
      'Accept-Language': 'pt-BR',
      'API-Version': 'v2',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/icd11/mms/search`, {
          headers: headers,
          params: { q: query },
        }),
      );

      const mockResults: TerminologiaResultDto[] = [
        {
          code: '1E30.0',
          display: 'Gripe devida a vírus influenza identificado',
        },
        { code: '1E31', display: 'Gripe devida a vírus influenza não identificado' },
      ];

      this.logger.log(`Busca ICD-11 por "${query}" (MOCK)`);

      return mockResults;
    } catch (error) {
      this.logger.error(
        `Erro ao buscar no ICD-11: ${error.message}`,
        error.stack,
      );
      throw new Error('Falha ao conectar com a API do ICD-11.');
    }
  }

  // /**
  //  * Função auxiliar para mapear a resposta real da API.
  //  */
  // private mapResponseToDto(data: any): TerminologiaResultDto[] {
  //   // Exemplo:
  //   // return data.destinationEntities.map(entity => ({
  //   //   code: entity.theCode,
  //   //   display: entity.title
  //   // }));
  //   return [];
  // }
}