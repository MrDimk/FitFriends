import {ApiProperty} from '@nestjs/swagger';
import {UserFitnessLevel, UserGender, WorkoutTime, WorkoutType} from '@backend/shared/shared-types';
import {Expose} from 'class-transformer';

export class WorkoutRdo {
  @ApiProperty({
    description: 'Workout unique ID.',
    example: 300
  })
  @Expose({ name: 'workoutId'})
  public id: number;

  @ApiProperty({
    description: 'Workout title',
    example: 'Everyday Yoga'
  })
  public title: string; //  длина 1 - 15 символов

  @ApiProperty({
    description: 'Path to workout image',
    example: 'uploads/image.png'
  })
  @Expose()
  backgroundImage: string;  // обязательное поле; изображение в формате jpg/png


  @ApiProperty({
    description: 'Workout level',
    example: 'beginner'
  })
  @Expose()
  public level: UserFitnessLevel;

  @ApiProperty({
    description: 'Workout type',
    example: 'yoga'
  })
  @Expose()
  public type: WorkoutType;

  @ApiProperty({
    description: 'Workout duration',
    example: 'short'
  })
  @Expose()
  public duration: WorkoutTime;

  @ApiProperty({
    description: 'Workout price',
    example: 100,
  })
  @Expose()
  public price: number;

  @ApiProperty({
    description: 'Number of calories',
    example: 1200,
  })
  @Expose()
  public calories: number;

  @ApiProperty({
    description: 'Workout description',
    example: 'This is a great workout for beginners',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Target gender',
    example: 'unimportant',
  })
  @Expose()
  public targetGender: UserGender;

  @ApiProperty({
    description: 'Workout video',
    example: 'workout.mp4',
  })
  @Expose()
  public video: string;

  @ApiProperty({
    description: 'Workout rating',
    example: 0,
  })
  @Expose()
  public rating: number;

  @ApiProperty({
    description: 'Trainer ID',
    example: 'abc123',
  })
  @Expose()
  public trainerId: string;

  @ApiProperty({
    description: 'Special offer',
    example: false,
  })
  @Expose()
  public specialOffer: boolean;
}
