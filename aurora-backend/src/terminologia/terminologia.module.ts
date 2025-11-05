import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminologiaController } from './terminologia.controller';
import { Icd11Service } from './services/icd11/icd11.service';
import { SnomedService } from './services/snomed/snomed.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [TerminologiaController],
  providers: [Icd11Service, SnomedService],
})
export class TerminologiaModule {}