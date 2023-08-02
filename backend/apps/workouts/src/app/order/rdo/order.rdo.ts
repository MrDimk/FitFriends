import {ApiProperty} from '@nestjs/swagger';
import {OrderType, PaymentMethod} from '@backend/shared/shared-types';
import {Expose, Transform} from 'class-transformer';

export class OrderRdo {
  @Expose({name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'Trainer ID',
    example: 'abc123',
  })
  @Expose()
  public trainerId: string;

  @ApiProperty({
    description: 'Common user ID',
    example: 'abc1234',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Workout ID',
    example: 'abc12345',
  })
  @Expose()
  public workoutId: string;

  @ApiProperty({
    description: 'Order type',
    example: 'membership'
  })
  @Expose()
  public type: OrderType;

  @ApiProperty({
    description: 'One training price',
    example: 100,
  })
  @Expose()
  public trainingPrice: number;

  @ApiProperty({
    description: 'Amount of trainings in order',
    example: 5,
  })
  @Expose()
  public trainingsAmount: number;

  @ApiProperty({
    description: 'Payment method',
    example: 'Mir'
  })
  @Expose()
  public paymentMethod: PaymentMethod;
}
