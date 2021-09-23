import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gender {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column()
    gender_name: string

    @Column()
    cap: string
}