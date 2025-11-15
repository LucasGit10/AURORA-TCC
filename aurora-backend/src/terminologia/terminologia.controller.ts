import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { Icd11Service } from './services/icd11/icd11.service';
import { SnomedService } from './services/snomed/snomed.service';
import { TerminologiaResultDto } from './dto/terminologia-result.dto';
import { SearchQueryDto } from './dto/search-query.dto';

@Controller('terminologia')
export class TerminologiaController {
  constructor(
    private readonly icd11Service: Icd11Service,
    private readonly snomedService: SnomedService,
  ) {}

  @Get('icd11/search')
  async searchIcd11(
    @Query() query: SearchQueryDto,
  ): Promise<TerminologiaResultDto[]> {

    try {
      return await this.icd11Service.search(query.q);
    } catch (error) {
      throw new HttpException(
        'Erro ao consultar ICD-11',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('snomed/search')
  async searchSnomed(
    @Query() query: SearchQueryDto,
  ): Promise<TerminologiaResultDto[]> {    
    try {
      return await this.snomedService.search(query.q);
    } catch (error) {
      throw new HttpException(
        'Erro ao consultar SNOMED CT',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}