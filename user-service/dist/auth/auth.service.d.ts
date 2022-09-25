import { JwtService } from "@nestjs/jwt";
import { Observable } from 'rxjs';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJWT(user: User): Observable<string>;
    hashPassword(password: string): Observable<string>;
}
