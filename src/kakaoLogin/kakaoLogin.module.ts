import { Module } from '@nestjs/common';
import { KakaoLoginController } from './kakaoLogin.controller';
import { KakaoLoginService } from './kakaoLogin.service';

@Module({
    controllers: [KakaoLoginController],
    providers: [KakaoLoginService],
})
export class KakaoLoginModule {}
