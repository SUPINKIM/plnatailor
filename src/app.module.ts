import { SignupModule } from './signup/signup.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { routes } from './route';
import { LoginModule } from './login/login.module';
import { KakaoLoginModule } from './kakao-login/kakaoLogin.module';
import { DBModule } from './database/db.module';
@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
        DBModule,
        LoginModule,
        SignupModule,
        KakaoLoginModule,
        RouterModule.register(routes),
    ],
})
export class AppModule {}
