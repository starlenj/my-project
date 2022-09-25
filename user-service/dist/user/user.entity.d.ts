import { AuthService } from "src/auth/auth.service";
export declare class User {
    private authService;
    constructor(authService: AuthService);
    id: number;
    email: string;
    sube_id: number;
    password: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    emailToLowerCase(): void;
    hashedPasswordUser(): Promise<void>;
}
