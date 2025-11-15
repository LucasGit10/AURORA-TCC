import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TerminologiaController } from './terminologia.controller';
import { Icd11Service } from './services/icd11/icd11.service';
import { SnomedService } from './services/snomed/snomed.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
    ConfigModule,
  ],
  controllers: [TerminologiaController],
  providers: [Icd11Service, SnomedService],
})
export class TerminologiaModule {}