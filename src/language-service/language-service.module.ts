import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../ormconfig';
import { LanguageServiceController } from './language-service.controller';
import { LanguageServiceService } from './language-service.service';
import { Language } from './language.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      Language
    ])
  ],
  controllers: [LanguageServiceController],
  providers: [LanguageServiceService]
})
export class LanguageServiceModule {}
