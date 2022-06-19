import { UserAccountDto } from './../database/user/user.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class LoginService {
    login(): string {
        return 'hi supin welcome back!';
    }

    getUserInfo({ email, password }: UserAccountDto) {
        // db에서 userId와 password가 일치하는 유저를 찾아오는 로직 필요
    }

    decodePassword(hashedPassword: string) {
        return 'abc';
    }
}
