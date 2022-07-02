import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KakaoStrategy } from './kakao.strategy';
import { KakaoLoginService } from './kakaoLogin.service';
import { KakaoLoginController } from './kakaoLogin.controller';

@Module({
    imports: [ConfigModule],
    controllers: [KakaoLoginController],
    providers: [KakaoLoginService, KakaoStrategy],
})
export class KakaoLoginModule {}
