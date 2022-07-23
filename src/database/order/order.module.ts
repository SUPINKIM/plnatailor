import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '../schema/order.schema';
import { OrderService } from './order.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Order.name, schema: OrderSchema, collection: 'orders' }],
            'user',
        ),
    ],
    providers: [OrderService],
    exports: [OrderService],
})
export class OrderModule {}
