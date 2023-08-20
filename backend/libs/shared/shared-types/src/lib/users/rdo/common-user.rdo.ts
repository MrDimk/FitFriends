import {Expose, Transform} from 'class-transformer';
import {UserLocation, UserRole} from '@backend/shared/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {Gender, UserFitnessLevel, WorkoutTime, WorkoutType} from '@prisma/client';

export class CommonUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({ name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'User name',
    example: 'Hulk'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User description',
    example: 'Huge green mutant, avenger',
  })
  @Expose()
  public description?: string;

  @ApiProperty({
    enum: Gender,
    description: 'User\'s gender',
    example: 'unimportant',
  })
  @Expose()
  public gender: Gender;

  @ApiProperty({
    description: 'User birth date',
    example: '1980-03-01'
  })
  @Expose()
  public birthDate?: Date;

  @ApiProperty({
    enum: UserRole,
    description: 'User\'s role',
    example: 'Trainer',
  })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    enum: UserLocation,
    description: 'One of the subway stations in SPb',
    example: 'Pionerskaya',
  })
  @Expose()
  public location: UserLocation;

  @ApiProperty({
    description: 'User avatar',
    example: 'avatar.png'
  })
  @Expose()
  public avatarImage: string;

  @ApiProperty({
    description: 'User\'s page image',
    example: 'page-bg.png'
  })
  @Expose()
  public pageImage: string;

  @ApiProperty({
    enum: UserFitnessLevel,
    description: 'User\'s physical fitness level',
    example: 'beginner',
  })
  @Expose()
  public fitnessLevel: UserFitnessLevel;

  @ApiProperty({
    description: 'The types of workouts the user prefers',
    type: 'array',
    items: {type: 'string'},
    enum: WorkoutType
  })
  @Expose()
  public workoutTypes: WorkoutType[];

  @ApiProperty({
    enum: WorkoutTime,
    description: 'User\'s preferred workout duration',
    example: 'medium',
  })
  @Expose()
  public workoutTime: WorkoutTime;

  @ApiProperty({
    description: 'User daily calorie goal',
    example: 2000
  })
  @Expose()
  public dailyCalorieBurn: number;

  @ApiProperty({
    description: 'User final calorie goal',
    example: 5000
  })
  @Expose()
  public calorieBurnGoal: number;

  @ApiProperty({
    description: 'User training readiness',
    example: true
  })
  @Expose()
  public readyToTrain: boolean;
}
