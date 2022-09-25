import { ErrorDTO } from 'src/dto/error-response.dto';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    Login(loginUser: UserLoginDTO): Promise<ErrorDTO | import("rxjs").Observable<string>>;
}
