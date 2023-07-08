import {
  UserFitnessLevel,
  UserGender,
  UserLocation,
  UserRole,
  WorkoutTime,
  WorkoutType
} from '@backend/shared/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsISO8601, IsString, Length} from 'class-validator';
import {USER_FIELDS, USER_VALIDATION_ERRORS} from '../auth.const';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: USER_VALIDATION_ERRORS.UserEmailNotValid })
  public email: string;

  @ApiProperty({
    enum: UserFitnessLevel,
    description: 'User\'s physical fitness level',
    example: 'beginner',
  })
  public fitnessLevel: UserFitnessLevel;

  @ApiProperty({
    enum: UserGender,
    description: 'User\'s gender',
    example: 'unimportant',
  })
  public gender: UserGender;

  @ApiProperty({
    enum: UserLocation,
    description: 'One of the subway stations in SPb',
    example: 'Pionerskaya',
  })
  public location: UserLocation;

  @ApiProperty({
    description: 'User name',
    example: 'Hulk',
  })
  @IsString()
  @Length(USER_FIELDS.UserNameMin, USER_FIELDS.UserNameMax, { message: USER_VALIDATION_ERRORS.UserNameLength })
  public name: string;

  @ApiProperty({
    description: 'User description',
    example: 'Huge green mutant, avenger',
  })
  public description?: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1980-03-01'
  })
  @IsISO8601({}, { message: USER_VALIDATION_ERRORS.UserDateBirthNotValid })
  public birthDate?: Date;

  @ApiProperty({
    description: 'User password',
    example: 'qwerty12345'
  })
  @IsString()
  @Length(USER_FIELDS.PasswordMin, USER_FIELDS.PasswordMax, { message: USER_VALIDATION_ERRORS.UserPasswordLength })
  public password: string;

  @ApiProperty({
    enum: UserRole,
    description: 'User\'s role',
    example: 'Trainer',
  })
  public role: UserRole;

  @ApiProperty({
    description: 'The types of workouts the user prefers',
    type: 'array',
    items: {type: 'string'},
    enum: WorkoutType
  })
  public workoutTypes: WorkoutType[];

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
    enum: WorkoutTime,
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
