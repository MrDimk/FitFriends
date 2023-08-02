import {ApiProperty} from '@nestjs/swagger';
import {OrderType, PaymentMethod} from '@backend/shared/shared-types';
import {IsEnum, IsInt, Max, Min} from 'class-validator';
import {ORDER_DEFAULT, ORDER_VALIDATIOM_ERROR} from '../order.const';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Trainer ID',
    example: 'abc123',
  })
  public trainerId: string;

  @ApiProperty({
    description: 'Common user ID',
    example: 'abc1234',
  })
  public userId: string;

  @ApiProperty({
    description: 'Workout ID',
    example: 12345,
  })
  public workoutId: number;

  @ApiProperty({
    description: 'Order type',
    example: 'membership'
  })
  @IsEnum(OrderType)
  public type: OrderType;

  @ApiProperty({
    description: 'One training price',
    example: 100,
  })
  @IsInt()
  @Min(ORDER_DEFAULT.MIN_PRICE, {message: ORDER_VALIDATIOM_ERROR.MinPrice})
  public trainingPrice: number; // Для проверки актуальности цены

  @ApiProperty({
    description: 'Amount of trainings in order',
    example: 5,
  })
  @IsInt()
  @Min(ORDER_DEFAULT.MIN_AMOUNT, {message: ORDER_VALIDATIOM_ERROR.MinPrice})
  @Max(ORDER_DEFAULT.MAX_AMOUNT, {message: ORDER_VALIDATIOM_ERROR.MinPrice})
  public trainingsAmount: number;

  @ApiProperty({
    description: 'Payment method',
    example: 'Mir'
  })
  @IsEnum(PaymentMethod)
  public paymentMethod: PaymentMethod;
}
