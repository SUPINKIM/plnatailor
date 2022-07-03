import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { SignupModule } from './signup/signup.module';
import { Module } from '@nestjs/common';

import { RouterModule } from '@nestjs/core';
import { routes } from './route';
import { LoginModule } from './login/login.module';
import { KakaoLoginModule } from './kakao-login/kakaoLogin.module';
import { DBModule } from './database/db.module';
@Module({
    imports: [
        // ConfigModule.forRoot({ isGlobal: true }),
        DBModule,
        LoginModule,
        SignupModule,
        // KakaoLoginModule,
        AdminModule,
        RouterModule.register(routes),
    ],
})
export class AppModule {}
