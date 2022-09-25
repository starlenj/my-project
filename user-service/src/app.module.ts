import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { utilities, WinstonModule } from 'nest-winston';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import  * as winston from "winston";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      autoLoadEntities :true,
      synchronize:true
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename : "User.log",
          format :winston.format.combine(
              winston.format.timestamp(),
              utilities.format.nestLike()
          )
        })
      ]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [{
    provide : APP_INTERCEPTOR,
    useClass : LoggingInterceptor
  },{
    provide : APP_INTERCEPTOR,
    useClass : TransformInterceptor
  },Logger],
})
export class AppModule {}