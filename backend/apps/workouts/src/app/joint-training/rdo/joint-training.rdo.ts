import {ApiProperty} from '@nestjs/swagger';
import {Expose, Transform} from 'class-transformer';
import {JointTrainingStatus} from '@backend/shared/shared-types';

export class JointTrainingRdo {
  @ApiProperty({
    description: 'Joint Training ID',
    example: 123,
  })
  @Expose()
  public jointTrainingId: number;

  @ApiProperty({
    description: 'Initiator ID',
    example: 'abc123',
  })
  @Expose()
  public initiatorId: string;

  @ApiProperty({
    description: 'User ID',
    example: 'abc1234',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Date of Joint Training creation',
    example: '2023-07-24T00:00:00Z',
  })
  @Expose()
  @Transform(({value}) => value.toISOString())
  public createdAt: Date;

  @ApiProperty({
    description: 'Date of status change',
    example: '2023-07-24T00:00:00Z',
  })
  @Expose()
  @Transform(({value}) => value.toISOString())
  public statusChangedAt: Date;

  @ApiProperty({
    description: 'Status of Joint Training',
    example: 'review',
  })
  @Expose()
  public status: JointTrainingStatus;
}
