import { Injectable } from '@nestjs/common';

@Injectable()
export class KakaoLoginService {
    login(): string {
        return 'kakao login!';
    }
}
