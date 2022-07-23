import { Injectable } from '@nestjs/common';

@Injectable()
export class KakaoLoginService {
    // constructor(private readonly kakao: KakaoStrategy) {}

    login(): string {
        return 'kakao login!';
    }
}
