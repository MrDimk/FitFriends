import { ApiProperty } from '@nestjs/swagger';

export class ReviewRdo {
  @ApiProperty({
    description: 'Review ID',
    example: 1
  })
  public id: number;

  @ApiProperty({
    description: 'User ID',
    example: '60af5c4134958c7cee6de123'
  })
  public userId: string;

  @ApiProperty({
    description: 'Workout ID',
    example: 1
  })
  public workoutId: number;

  @ApiProperty({
    description: 'Review rating',
    example: 5
  })
  public rating: number;

  @ApiProperty({
    description: 'Review text',
    example: 'Great workout session!'
  })
  public text: string;

  @ApiProperty({
    description: 'Review creation date',
    example: '2023-08-24T14:15:22Z'
  })
  public createdAt: string;
}
