import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../ormconfig';
import { GenderController } from './gender.controller';
import { Gender } from './gender.entity';
import { GenderService } from './gender.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      Gender
    ])
  ],
  controllers: [GenderController],
  providers: [GenderService]
})
export class GenderModule {}
