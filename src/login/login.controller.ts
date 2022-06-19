import { Response } from 'express';
import { Body, Controller, Get, Res } from '@nestjs/common';
import { UserAccountDto } from '@/database/user/user.dto';
import { UserService } from '@/database/user/user.service';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
        private readonly userService: UserService,
    ) {}

    @Get()
    login(@Body() userAccount: UserAccountDto, @Res() res: Response) {
        console.log(userAccount);
        this.loginService.getUserInfo(userAccount);
        // this.loginService.login();
        return res.json();
    }
}
