import { Optional } from "@nestjs/common";
import { IsOptional } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    employeeId: string;
    @Column('text')
    name: string;
    @Column('text')
    lastName: string;
    @Column('text')
    phoneNumber: string;
    @Column('text')
    email: string;
    @Column({
        type: 'text',
        nullable: true,
    })
    photoUrl: string;
}
