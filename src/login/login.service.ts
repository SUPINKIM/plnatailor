import { UserAccountDto } from './../database/user/user.dto';
import { Injectable } from '@nestjs/common';
import { encodePassword } from '@/utils/password';
import { UserService } from '@/database/user/user.service';
@Injectable()
export class LoginService {
    login(): string {
        return 'hi supin welcome back!';
    }

    async getUserInfo(
        { email, password }: UserAccountDto,
        userService: UserService,
    ) {
        // db에서 userId와 password가 일치하는 유저를 찾아오는 로직 필요
        console.log('this is login');
        console.log(`email: ${email}, password: ${password}`);
        console.log(userService);
        const user = await userService.findOneUser(email);
        if (user) {
            if (this.comparePassword(password, user.password)) {
                return true;
            }
        }
        return false;
    }

    comparePassword(password: string, hashedPassword: string) {
        return encodePassword(password) === hashedPassword;
    }
}
