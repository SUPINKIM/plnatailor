import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './route';
import { LoginModule } from './login/login.module';
import { KakaoLoginModule } from './kakaoLogin/kakaoLogin.module';

@Module({
    imports: [LoginModule, KakaoLoginModule, RouterModule.register(routes)],
})
export class AppModule {}
