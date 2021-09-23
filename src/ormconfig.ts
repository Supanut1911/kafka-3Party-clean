import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Gender } from "./gender/gender.entity"
import { Language } from "./language-service/language.entity"
import { Person } from "./person-service/person.entity"


export const  typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'kafka_playground',
    entities: [
        Gender,
        Language,
        Person
    ],
    synchronize: true
}
