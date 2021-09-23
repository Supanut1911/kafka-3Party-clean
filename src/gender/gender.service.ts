import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KafkaPayload } from '../app/common/kafka/kafka.message';
import { KafkaService } from '../app/common/kafka/kafka.service';
import { Gender } from './gender.entity';
import {UPDATE_GENDER_WHEN_ADD} from '../app/constant'

@Injectable()
export class GenderService {

    constructor(
        @InjectRepository(Gender)
        private readonly genderRepo: Repository<Gender>,

        private readonly kafkaService: KafkaService
    ){}

    async getgenders() {
        return this.genderRepo.find()
    }

    async addgender(
        genderName: string,
        cap: string
    ) {
        let gender = await this.genderRepo.create()
        gender.gender_name  = genderName
        gender.cap = cap

        try {
            await this.genderRepo.save(gender)

            //publish message to kafka
           this.send(gender)

            return gender
        } catch (error) {
           throw new HttpException(`some thing error ${error}`,400) 
        }
    }

    async send(data) {
        const message = data
        const payload: KafkaPayload = {
            messageId: '' + new Date().valueOf(),
            body: message,
            messageType: 'add.gender',
            topicName: UPDATE_GENDER_WHEN_ADD,
        }
        const value = await this.kafkaService.sendMessage(
            UPDATE_GENDER_WHEN_ADD,
            payload
        )
        console.log('kafka status =>', value);
        return message
    }

}
