import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    id: number;

    @Prop()
    orderlist: { title: string; count: number }[];

    @Prop()
    price: number; //total price
}

export const OrderSchema = SchemaFactory.createForClass(Order);
