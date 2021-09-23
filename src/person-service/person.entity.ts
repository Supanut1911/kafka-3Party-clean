import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column()
    name: string

    @Column({
        nullable: true
    })
    gender: string

    @Column({
        nullable: true
    })
    cap: string
}