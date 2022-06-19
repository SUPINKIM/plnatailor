import { UserModule } from './../database/user/user.module';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
    imports: [UserModule],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {}
