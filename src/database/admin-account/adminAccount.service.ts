import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminAccountDocument } from './../schema/adminAccount.schema';
import { AdminAccount } from '../schema/adminAccount.schema';
import { AdminAccountType } from './adminAccount.dto';

@Injectable()
export class AdminAccountService {
    constructor(
        @InjectModel(AdminAccount.name, 'adminDB')
        private adminAccountModel: Model<AdminAccountDocument>,
    ) {}

    async addAccount(adminAccount: AdminAccountType) {
        (await this.adminAccountModel.createCollection()).insertOne({
            userId: adminAccount.id,
            password: adminAccount.password,
        });
    }
}
