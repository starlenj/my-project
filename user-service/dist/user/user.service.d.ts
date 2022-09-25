import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService extends TypeOrmCrudService<User> {
    constructor(repo: Repository<User>);
    validateUser(loginUser: UserLoginDTO): Promise<User>;
}
