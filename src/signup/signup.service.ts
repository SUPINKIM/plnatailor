import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import process from 'process';

@Injectable()
export class SignupService {
    signup(): string {
        return 'aaaaaa';
    }

    checkPossibilityUsingId(userId: string): boolean {
        // firebase나 mongodb에서 전체 userId를 조회했다고 가정
        const existedUserIds: string[] = ['abc'];
        return !existedUserIds.includes(userId);
    }

    encodePassword(password: string): string {
        const hashed = crypto
            .createHmac('sha256', process.env.SECRETE_KEY)
            .update(password)
            .digest('hex');

        console.log(hashed);

        return hashed;
    }
}
