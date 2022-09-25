import { Body, Controller, Post } from '@nestjs/common';
import { ErrorDTO } from 'src/dto/error-response.dto';
import { UserJWTDto } from 'src/dto/user-jwt.dto';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService :UserService,private authService:AuthService){}
    @Post("Login")
    async Login(@Body() loginUser:UserLoginDTO ) {
        var  errorResponse: ErrorDTO = new ErrorDTO();
        const validUser :User  = 	await	this.userService.validateUser(loginUser);
        if(validUser === null) {
            errorResponse.message = "Invalid Email or Password";
            return errorResponse;
        }
        return this.authService.generateJWT(validUser);
    }

}