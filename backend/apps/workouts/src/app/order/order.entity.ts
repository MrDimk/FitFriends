import {OrderInterface} from '@backend/shared/shared-types';
import {OrderType, PaymentMethod} from '@prisma/client';

export class OrderEntity implements OrderInterface {
  public id?: number;
  public trainerId: string;
  public userId: string;
  public workoutId: number;
  public createdAt: Date;
  public orderType: OrderType;
  public trainingPrice: number;
  public trainingsAmount: number;
  public paymentMethod: PaymentMethod;
  public totalCost: number;

  constructor(order: OrderInterface ) {
    this.fillEntity(order);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(order: OrderInterface) {
  this.id = order.id;
  this.trainerId = order.trainerId;
  this.userId = order.userId;
  this.workoutId = order.workoutId;
  this.createdAt = order.createdAt;
  this.orderType = order.orderType;
  this.trainingPrice = order.trainingPrice;
  this.trainingsAmount = order.trainingsAmount;
  this.totalCost = order.trainingPrice * order.trainingsAmount;
  this.paymentMethod = order.paymentMethod;
  }
}
