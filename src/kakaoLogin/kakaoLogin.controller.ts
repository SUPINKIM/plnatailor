import { Controller, Get } from '@nestjs/common';
import { KakaoLoginService } from './kakaoLogin.service';

@Controller()
export class KakaoLoginController {
    constructor(private readonly kakaoLoginService: KakaoLoginService) {}

    @Get()
    login(): string {
        return this.kakaoLoginService.login();
    }
}
