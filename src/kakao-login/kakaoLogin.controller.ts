import { Controller, Get } from '@nestjs/common';
import { KakaoStrategy } from './kakao.strategy';
import { KakaoLoginService } from './kakaoLogin.service';

@Controller()
export class KakaoLoginController {
    constructor(
        private readonly kakaoLoginService: KakaoLoginService,
        private readonly kakaoStrategy: KakaoStrategy,
    ) {}

    @Get()
    async login(): Promise<string> {
        console.log(this.kakaoStrategy);
        console.log(this.kakaoStrategy.userProfile);
        // await this.kakaoStrategy.validate();
        return this.kakaoLoginService.login();
    }
}
