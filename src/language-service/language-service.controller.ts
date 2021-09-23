import { Body, Controller, Get, Post } from '@nestjs/common';
import { LanguageServiceService } from './language-service.service';

@Controller('language')
export class LanguageServiceController {
    constructor(
        private readonly langService: LanguageServiceService
    ){}

    @Get()
    getLanguages() {
        return this.langService.getLang()
    }

    @Post()
    addLanguages(
        @Body('languageName') languageName: string,
        @Body('cap') cap: string
    ) {
        return this.langService.addLang(languageName, cap)
    }
}

