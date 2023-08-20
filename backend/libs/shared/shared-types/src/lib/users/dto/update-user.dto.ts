import {ApiProperty} from '@nestjs/swagger';
import {IsString, Length} from 'class-validator';
import {Gender, UserFitnessLevel, WorkoutTime, WorkoutType} from '@prisma/client';
import {UserLocation} from '../user-location.enum';
import {USER_FIELDS, USER_VALIDATION_ERRORS} from '../auth.const';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User\'s physical fitness level',
    example: 'beginner',
  })
  public fitnessLevel?: UserFitnessLevel;

  @ApiProperty({
    description: 'User\'s gender',
    example: 'unimportant',
  })
  public gender?: Gender;

  @ApiProperty({
    enum: UserLocation,
    description: 'One of the subway stations in SPb',
    example: 'Pionerskaya',
  })
  public location?: UserLocation;

  @ApiProperty({
    description: 'User name',
    example: 'Hulk',
  })
  @IsString()
  @Length(USER_FIELDS.UserNameMin, USER_FIELDS.UserNameMax, { message: USER_VALIDATION_ERRORS.UserNameLength })
  public name?: string;

  @ApiProperty({
    description: 'User description',
    example: 'Huge green mutant, avenger',
  })
  public description?: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1980-03-01'
  })
  public birthDate?: Date;

  @ApiProperty({
    description: 'The types of workouts the user prefers',
    type: 'array',
    items: {type: 'string'}
  })
  public workoutTypes?: WorkoutType[];

  @ApiProperty({
    description: 'User avatar',
    example: 'avatar.png'
  })
  public avatarImage?: string;

  @ApiProperty({
    description: 'User\'s page image',
    example: 'page-bg.png'
  })
  public pageImage?: string;

  @ApiProperty({
    description: 'User\'s preferred workout duration',
    example: 'medium',
  })
  public workoutTime?: WorkoutTime;

  @ApiProperty({
    description: 'User daily calorie goal',
    example: 2000
  })
  public dailyCalorieBurn?: number;

  @ApiProperty({
    description: 'User final calorie goal',
    example: 5000
  })
  public calorieBurnGoal?: number;

  @ApiProperty({
    description: 'User training readiness',
    example: true
  })
  public readyToTrain?: boolean;

  @ApiProperty({
    description: 'User\'s certificates',
    example: ['cert1.png', 'cert2.png']
  })
  public certificates?: string[];

  @ApiProperty({
    description: 'User\'s achievements',
    example: 'World champion'
  })
  public achievements?: string;

  @ApiProperty({
    description: 'Trainer\'s personal workout readiness',
    example: true
  })
  public readyForPersonalTraining?: boolean;
}
