import { UserInformationDto, UserAccountDto } from '@/database/user/user.dto';
import { encodePassword } from '@/utils/password';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
    async validate(
        userInfo: Partial<UserInformationDto & UserAccountDto>,
        sameUserChecker: (email: string) => Promise<boolean>,
    ): Promise<boolean> {
        // user email 정보가 기존 테이블에서 겹치는 사람이 있는지 없는지 확인
        console.log(!(await sameUserChecker(userInfo.email)));
        return !(await sameUserChecker(userInfo.email));
    }

    saveUser(
        userInfo: Partial<UserInformationDto & UserAccountDto>,
        saveUserInDB: (
            userInfo: Partial<UserInformationDto & UserAccountDto>,
        ) => void,
    ) {
        saveUserInDB({
            email: userInfo.email,
            password: userInfo.password,
        });
    }

    encodePassword(password: string): string {
        return encodePassword(password);
    }
}
