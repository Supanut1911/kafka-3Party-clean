import { Body, Controller, Get, Post } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { SubscribeTo } from '../app/common/kafka/kafka.decorator';
import { PersonServiceService } from './person-service.service';
import {UPDATE_GENDER_WHEN_ADD} from '../app/constant'


let tmp = () => {
    console.log('hello world');

    
}


@Controller('person')
export class PersonServiceController {
    constructor(
        public personService: PersonServiceService,

    ){
    }   



    @Get()
    getPersons(){ 
        return this.personService.getPerson()
    }

    @Post()
    addPerson(
        @Body('name') name: string,
        @Body('gender') gender: string,
        @Body('cap') cap: string,
    ) {
        return this.personService.addPerson(name, gender, cap)
    }


    @SubscribeTo(UPDATE_GENDER_WHEN_ADD)
    updateGenderPerson(payload: string) {

        let res = JSON.parse(payload)
        console.log('---->',res);
        console.log('this', this);
        tmp()
        return this.personService.update()
    }

}
