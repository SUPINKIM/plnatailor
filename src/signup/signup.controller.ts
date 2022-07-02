import { Response, Request } from 'express';
import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { SignupService } from './signup.service';
import { UserService } from '@/database/user/user.service';

@Controller()
export class SignupController {
    constructor(
        private readonly signupService: SignupService,
        private readonly userService: UserService,
    ) {}

    @Post()
    async signup(@Req() req: Request, @Res() res: Response) {
        try {
            const { email, password } = req.body;

            if (!(email && password)) throw Error();

            const validation = await this.signupService.validate(
                email,
                this.userService.isSameUserAccount.bind(this.userService),
            );

            if (validation) {
                const hashedPass = this.signupService.encodePassword(password);
                this.signupService.saveUser(
                    { email, password: hashedPass },
                    this.userService.saveUser.bind(this.userService),
                );
                return res.status(HttpStatus.OK).json({ success: 'OK' });
            }
        } catch {
            return res.status(HttpStatus.BAD_REQUEST).json({ success: 'FAIL' });
        }
    }
}
