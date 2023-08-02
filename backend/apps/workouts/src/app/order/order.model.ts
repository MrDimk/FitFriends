// import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
// import {OrderInterface, OrderType, PaymentMethod} from '@backend/shared/shared-types';
// import {Document} from 'mongoose';
// import dayjs from 'dayjs';
//
// @Schema({
//   collection: 'orders',
//   timestamps: true
// })
//
// export class OrderModel extends Document implements OrderInterface {
//   @Prop({
//     required: true,
//   })
//   public trainerId: string;
//
//   @Prop({
//     required: true,
//   })
//   public userId: string;
//
//   @Prop({
//     required: true,
//   })
//   public workoutId: string;
//
//   @Prop({
//     required: true,
//     default: dayjs()
//   })
//   public createdAt: Date;
//
//   @Prop({
//     required: true,
//     type: String,
//     enum: OrderType,
//     default: OrderType.Membership,
//   })
//   public orderType: OrderType;
//
//   @Prop({
//     required: true,
//   })
//   public trainingPrice: number;
//
//   @Prop({
//     required: true,
//   })
//   public trainingsAmount: number;
//
//   @Prop({
//     required: true,
//     type: String,
//     enum: PaymentMethod
//   })
//   public paymentMethod: PaymentMethod;
//
//   @Prop({
//     required: true,
//   })
//   public totalCost: number;
// }
//
// export const OrderSchema = SchemaFactory.createForClass(OrderModel);
