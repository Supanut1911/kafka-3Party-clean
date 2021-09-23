import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Language {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column()
    language_name: string

    @Column()
    cap: string
}