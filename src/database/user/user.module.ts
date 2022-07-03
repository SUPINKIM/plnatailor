import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@/database/schema/user.schema';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: User.name, schema: UserSchema, collection: 'users' }],
            'userDB',
        ),
    ],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
