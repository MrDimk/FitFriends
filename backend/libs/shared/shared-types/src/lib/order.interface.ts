import {OrderType, PaymentMethod} from '@prisma/client';

export interface OrderInterface {
  id?: number;
  trainerId: string;
  userId: string;
  workoutId: number;
  createdAt?: Date;
  orderType?: OrderType;
  trainingPrice: number;
  trainingsAmount: number;
  totalCost?: number;
  paymentMethod: PaymentMethod;
}
