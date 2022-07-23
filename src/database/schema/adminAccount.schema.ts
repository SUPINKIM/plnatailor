import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminAccountDocument = AdminAccount & Document;

@Schema()
export class AdminAccount {
    @Prop()
    userId: string;

    @Prop()
    password: string;
}

export const AdminAccountSchema = SchemaFactory.createForClass(AdminAccount);
