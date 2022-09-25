"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const logging_interceptor_1 = require("./interceptor/logging.interceptor");
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const winston = require("winston");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                url: process.env.DATABASE_URL,
                autoLoadEntities: true,
                synchronize: true
            }),
            nest_winston_1.WinstonModule.forRoot({
                transports: [
                    new winston.transports.File({
                        filename: "User.log",
                        format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike())
                    })
                ]
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [{
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor
            }, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor
            }, common_1.Logger],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map