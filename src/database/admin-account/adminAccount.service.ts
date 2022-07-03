import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminAccountDocument } from './../schema/adminAccount.schema';
import { AdminAccount } from '../schema/adminAccount.schema';

@Injectable()
export class AdminAccountService {
    constructor(
        @InjectModel(AdminAccount.name, 'adminDB')
        private adminAccountModel: Model<AdminAccountDocument>,
    ) {}

    async addAccount() {
        (await this.adminAccountModel.createCollection()).insertOne({
            userId: 'test-admin123',
            password: '234',
        });
    }
}
