import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TerminologiaResultDto } from '../../dto/terminologia-result.dto';

@Injectable()
export class SnomedService {
  private readonly logger = new Logger(SnomedService.name);
  
  private readonly snowstormUrl = process.env.SNOWSTORM_URL || 'http://localhost:8080/fhir';

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<TerminologiaResultDto[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.snowstormUrl}/ValueSet/$expand`, {
          params: {
            url: 'http://snomed.info/sct?fhir_vs=ecl/<<404684003',
            filter: query,
            includeDesignations: true,
            count: 15,
          },
        }),
      );

      if (response.data?.expansion?.contains) {
        const results: TerminologiaResultDto[] =
          response.data.expansion.contains.map((item: any) => ({
            code: item.code,
            display: item.display,
          }));
        
        this.logger.log(`Busca SNOMED por "${query}" encontrou ${results.length} resultados.`);
        return results;
      }

      return [];
    } catch (error) {
      this.logger.error(
        `Erro ao buscar no SNOMED (Snowstorm): ${error.message}`,
        error.stack,
      );
      throw new Error('Falha ao conectar com o servidor SNOMED.');
    }
  }
}