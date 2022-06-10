import { Injectable } from '@nestjs/common';

interface UserInfo {
    name: string;
    id: string;
    hashedPassword: string;
    timestamp: number;
    social?: {
        kakao: {
            account: string;
            accessToken: string;
        };
    };
}

@Injectable()
export class LoginService {
    login(): string {
        return 'hi supin welcome back!';
    }

    getUserInfo(userId: string, password: string) {
        // db에서 userId와 password가 일치하는 유저를 찾아오는 로직 필요
    }

    decodePassword(hashedPassword: string) {
        return 'abc';
    }
}
