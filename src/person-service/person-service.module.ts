import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../ormconfig';
import { PersonServiceController } from './person-service.controller';
import { PersonServiceService } from './person-service.service';
import { Person } from './person.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      Person
    ])
  ],
  controllers: [PersonServiceController],
  providers: [PersonServiceService]
})
export class PersonServiceModule {}
