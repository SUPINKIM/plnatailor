import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
    constructor(readonly config: ConfigService) {
        super({
            //clientId: process.env.KAKAO_CLIENT_ID,
            clientID: config.get('KAKAO_CLIENT_ID'),
            callbackURL: config.get('KAKAO_CALLBACK_URL'),
        });
    }

    async validate(accessToken: string, refreshToken: string, profile, done) {
        console.log(`access-token : ${accessToken}`);
        console.log(`refresh-token : ${refreshToken}`);
        console.log(profile);

        done(null, {
            'access-token': accessToken,
            'refresh-token': refreshToken,
        });
    }
}
