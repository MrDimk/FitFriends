import {Expose, Transform} from 'class-transformer';
import {UserFitnessLevel, UserLocation, UserRole, WorkoutType, UserGender} from '@backend/shared/shared-types';
import {ApiProperty} from '@nestjs/swagger';

export class TrainerUserRdo {
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
    enum: UserGender,
    description: 'User\'s gender',
    example: 'unimportant',
  })
  @Expose()
  public gender: UserGender;

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
    description: 'User\'s certificates',
    example: ['cert1.png', 'cert2.png']
  })
  @Expose()
  public certificates: string[];

  @ApiProperty({
    description: 'User\'s achievements',
    example: 'World champion'
  })
  @Expose()
  public achievements: string;

  @ApiProperty({
    description: 'Trainer\'s personal workout readiness',
    example: true
  })
  @Expose()
  public readyForPersonalTraining: boolean;
}
