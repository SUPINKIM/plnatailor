export class UserAccountDto {
    email: string;
    password: string;
}

export class UserInformationDto {
    name: string;
    id: string;
    password: string;
    timestamp: number;
    social?: {
        kakao: {
            account: string;
            accessToken: string;
        };
    };
}
