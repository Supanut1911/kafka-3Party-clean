import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscribeTo } from '../app/common/kafka/kafka.decorator';
import { Person } from './person.entity';
import {UPDATE_GENDER_WHEN_ADD} from '../app/constant'
import { KafkaPayload } from '../app/common/kafka/kafka.message';
import { KafkaService } from '../app/common/kafka/kafka.service';

let persons = [
    {
        name: 'Bob',
        gender_name: 'null',
        cap: 'n'
    }
]

@Injectable()
export class PersonServiceService {
    constructor(
        @InjectRepository(Person)
        private readonly PersonRepo: Repository<Person>
    ){

    }

    async getPerson() {
        console.log('getPerson=======> ', persons);
        
        return this.PersonRepo.find()
    }

    async addPerson(
        name: string,
        gender: string,
        cap: string
    ) {
        let person = await this.PersonRepo.create()
        person.name = name
        person.gender = gender
        person.cap = cap

        try {
            await this.PersonRepo.save(person)
            return person
        } catch (error) {
            throw new HttpException(`some thing error ${error}`,400)
        }
    }



    // @SubscribeTo(UPDATE_GENDER_WHEN_ADD)
    // updateGenderPerson(payload: string) {
    //     let res = JSON.parse(payload)
    //     let { gender_name, cap}  = res.body
    //     console.log('coming data =', res.body);
        
        
    //     //array
    //     // persons[0].gender_name = gender_name
    //     // persons[0].cap  = cap
        


    //     // call db => มีปัญหาเนื้อจาก db จำเป็นต้องใช้ sync (async await)
    //     // console.log('*=>', this.PersonRepo);
        
    //     // let person =  this.PersonRepo.find()
    //     // console.log('xxxxxxxxxxx=>', person);
        

    //     // if(!person) {
    //     //     console.log('eeeeeerrrrrrrrrrrrrr');
    //     //     throw new HttpException('eeeeeerrrrrrrrrrrrrr',400)
            
    //     // }
    //     // // person.gender = gender_name
    //     // // person.cap = cap

    //     // try {
    //     //     await this.PersonRepo.save(person)
    //     // } catch (error) {
    //     //     throw new HttpException('update at consume fail',400)
    //     // }


    // }

    // update(
    //     payload: any
    // ) {
    //     let { gender_name, cap} = payload
    //     console.log(`${gender_name}, ${cap}`);
        

    // }

    update() {
        console.log('yo this update ');
        
    }
}
