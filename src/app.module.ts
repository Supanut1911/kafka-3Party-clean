import { Module } from '@nestjs/common';
import { DefaultModule } from './app/default/default.module';
import { ConsumerModule } from './app/consumer/consumer.module';
import { KafkaModule } from './app/common/kafka/kafka.module';
import { LanguageServiceModule } from './language-service/language-service.module';
import { PersonServiceModule } from './person-service/person-service.module';
import { GenderModule } from './gender/gender.module';

@Module({
  imports: [
    KafkaModule.register({
      clientId: 'cmsi-client',
      brokers: ['localhost:29092'],
      groupId: 'master-data-group',
    }),
    DefaultModule,
    ConsumerModule,
    LanguageServiceModule,
    PersonServiceModule,
    GenderModule,
  ],
})
export class AppModule {}
