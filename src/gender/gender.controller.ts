import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenderService } from './gender.service';

@Controller('gender')
export class GenderController {
    constructor(
        private readonly genderService: GenderService
    ){}

    @Get()
    getgenders() {
        return this.genderService.getgenders()
    }

    @Post()
    addgender(
        @Body('genderName') genderName: string,
        @Body('cap') cap: string
    ) {
        return this.genderService.addgender(genderName, cap)
    }
}
