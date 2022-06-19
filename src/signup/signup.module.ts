import { Module } from '@nestjs/common';
import { UserModule } from '@/database/user/user.module';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';

@Module({
    imports: [UserModule],
    controllers: [SignupController],
    providers: [SignupService],
})
export class SignupModule {}
