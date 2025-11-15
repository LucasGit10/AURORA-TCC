import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TerminologiaResultDto } from '../../dto/terminologia-result.dto';
import { ConfigService } from '@nestjs/config';
import { URLSearchParams } from 'url';

@Injectable()
export class Icd11Service {
  private readonly logger = new Logger(Icd11Service.name);
  private readonly apiUrl = 'https://icd.who.int/icdapi';
  private readonly tokenUrl = 'https://icd.who.int/icdapi/connect/token';

  private accessToken: string | null = null;
  private tokenExpiresAt: number = 0;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private async fetchNewToken(): Promise<string> {
    this.logger.log('Buscando novo token do ICD-11...');

    const clientId = this.configService.get<string>('ICD11_CLIENT_ID');
    const clientSecret = this.configService.get<string>('ICD11_CLIENT_SECRET');

    if (!clientId || !clientSecret) {
      this.logger.error('ICD11_CLIENT_ID ou ICD11_CLIENT_SECRET não definidos no .env');
      throw new Error('Credenciais do ICD-11 não configuradas.');
    }

    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');
    body.append('client_id', clientId);
    body.append('client_secret', clientSecret);
    body.append('scope', 'icdapi_access');

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          this.tokenUrl,
          body.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      );

      const { access_token, expires_in } = response.data;

      this.accessToken = access_token;
      this.tokenExpiresAt = Date.now() + (expires_in - 300) * 1000;

      this.logger.log('Novo token do ICD-11 obtido com sucesso.');
      
      return access_token;

    } catch (error) {
      this.logger.error(
        'Falha ao obter token do ICD-11',
        error.response?.data || error.message,
      );
      throw new Error('Falha na autenticação com a API do ICD-11.');
    }
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiresAt) {
      this.logger.debug('Usando token do ICD-11 em cache.');
      return this.accessToken;
    }

    return this.fetchNewToken();
  }

  async search(query: string): Promise<TerminologiaResultDto[]> {
    const token = await this.getAccessToken();

    const headers = {
      Authorization: `Bearer ${token}`,
      'Accept-Language': 'pt-BR',
      'API-Version': 'v2',
      Accept: 'application/json',
    };

    try {
      const searchUrl = `${this.apiUrl}/icd11/mms/search`;

      const response = await firstValueFrom(
        this.httpService.get(searchUrl, {
          headers: headers,
          params: { q: query, useFlexisearch: 'true' },
        }),
      );

      this.logger.log(`Busca ICD-11 por "${query}" bem-sucedida.`);

      return this.mapResponseToDto(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        this.logger.warn('Token do ICD-11 expirou, forçando renovação.');
        this.accessToken = null;
      }

      this.logger.error(
        `Erro ao buscar no ICD-11: ${error.response?.data?.message || error.message}`,
        error.stack,
      );
      throw new Error('Falha ao consultar a API do ICD-11.');
    }
  }

  private mapResponseToDto(data: any): TerminologiaResultDto[] {
    if (!data.destinationEntities) {
      this.logger.warn('Resposta da API ICD-11 não contém "destinationEntities"');
      return [];
    }

    return data.destinationEntities.map((entity: any) => ({
      code: entity.theCode || 'N/A',
      display: entity.title || 'Título indisponível',
    }));
  }
}