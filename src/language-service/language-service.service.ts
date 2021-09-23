import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Language } from './language.entity';

@Injectable()
export class LanguageServiceService {

    constructor(
        @InjectRepository(Language)
        private readonly langRepo: Repository<Language>
    ){}

    async getLang() {
        return this.langRepo.find()
    }

    async addLang(
        languageName: string,
        cap: string
    ) {
        let lang = await this.langRepo.create()
        lang.language_name  = languageName
        lang.cap = cap

        try {
            await this.langRepo.save(lang)
            return lang
        } catch (error) {
           throw new HttpException(`some thing error ${error}`,400) 
        }
    }
}
