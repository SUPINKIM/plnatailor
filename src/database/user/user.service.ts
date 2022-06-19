import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schema/user.schema';
import { UserAccountDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async saveUser({ email, password }: Partial<UserAccountDto>) {
        (await this.userModel.createCollection()).insertOne({
            email: email,
            password: password,
        });
    }

    async isSameUserAccount(email: string) {
        return !!(await this.findOneUser(email));
    }

    async findOneUser(email: string): Promise<User | null> {
        return null;
    }

    async findAllUserAccount(): Promise<{ email: string }[]> {
        return [];
    }
}
