import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminologiaModule } from './terminologia/terminologia.module';
import { AtendimentoModule } from './atendimento/atendimento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),

    TerminologiaModule,

    AtendimentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
