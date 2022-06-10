import { Controller, Post, Req, Res } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
    constructor(private readonly signupService: SignupService) {}

    @Post()
    signup(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        this.signupService.signup();

        return response.json();
    }
}
