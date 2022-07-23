import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AdminAccountService } from './adminAccount.service';
import {
    AdminAccount,
    AdminAccountSchema,
} from '../schema/adminAccount.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AdminAccount.name,
                    schema: AdminAccountSchema,
                    collection: 'account',
                },
            ],
            'adminDB',
        ),
    ],
    providers: [AdminAccountService],
    exports: [AdminAccountService],
})
export class AdminAccountModule {}
