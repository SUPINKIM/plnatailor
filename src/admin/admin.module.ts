import { AdminAccountModule } from '@/database/admin-account/adminAccount.module';
import { AdminController } from './admin.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [AdminAccountModule],
    controllers: [AdminController],
})
export class AdminModule {}
