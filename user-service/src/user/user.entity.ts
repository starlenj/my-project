import { IsEmail, IsNotEmpty,  IsString } from "class-validator";
import { AuthService } from "src/auth/auth.service";
import {  BeforeInsert, Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
const bcrypt = require('bcrypt');
@Entity()
export class User {

    constructor(private authService : AuthService){}
    @PrimaryGeneratedColumn()
    id: number;


    @Column({unique :true})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    sube_id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    password: string;


    @Column({default :true})
    status: boolean;

    @CreateDateColumn() createdAt :Date;
    @UpdateDateColumn() updatedAt :Date;
    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLocaleLowerCase();
    }
    @BeforeInsert()
    async hashedPasswordUser(){
        this.password = await bcrypt.hash(this.password,12);

    }
}