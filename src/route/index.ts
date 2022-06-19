import { SignupModule } from './../signup/signup.module';
import { LoginModule } from '../login/login.module';
import { KakaoLoginModule } from '../kakaoLogin/kakaoLogin.module';

export const routes = [
    {
        path: 'login',
        module: LoginModule,
        children: [
            {
                path: 'kakao',
                module: KakaoLoginModule,
            },
        ],
    },
    {
        path: 'signup',
        module: SignupModule,
    },
];
