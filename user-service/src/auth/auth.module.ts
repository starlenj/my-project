import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import {ConfigModule, ConfigService } from "@nestjs/config";
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
@Module({
    imports:[JwtModule.registerAsync({
        imports :[ConfigModule],
        inject :[ConfigService],
        useFactory :async (configService :ConfigService) =>({
            secret : process.env.JWT_SECRET,
            signOptions : {expiresIn :'1m'}
        })
    }),TypeOrmModule.forFeature([User])],
    providers: [AuthService,UserService],
    controllers: [AuthController],
    exports :[AuthService]
})
export class AuthModule {}