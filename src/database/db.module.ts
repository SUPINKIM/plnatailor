import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminAccount, AdminAccountSchema } from './schema/adminAccount.schema';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_USER_URL'),
            }),
            inject: [ConfigService],
            connectionName: 'userDB',
        }),

        MongooseModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_ADMIN_URL'),
            }),
            inject: [ConfigService],
            connectionName: 'adminDB',
        }),
    ],
})
export class DBModule {}
