import { Injectable } from '@nestjs/common';
import { JwtService} from "@nestjs/jwt";
import { from, Observable, of } from 'rxjs';
import { UserJWTDto } from 'src/dto/user-jwt.dto';
import { User } from 'src/user/user.entity';
const bcrypt = require('bcrypt');
@Injectable()
export class AuthService {

    constructor(private readonly jwtService : JwtService ){}

    generateJWT(user:User) :Observable<string>{
        return from(this.jwtService.signAsync({user}));
    }
    hashPassword(password: string) :Observable<string>{
        return from<string>(bcrypt.hash(password,12));
    }
}