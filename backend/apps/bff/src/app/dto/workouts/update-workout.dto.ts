import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsInt, IsNumber, IsString, Length, Max, Min} from 'class-validator';
import {UserFitnessLevel, UserGender, WorkoutTime, WorkoutType} from '@backend/shared/shared-types';
import {WORKOUT_FIELDS, WORKOUT_VALIDATION_ERRORS} from '../../const/workout.const';

export class UpdateWorkoutDto {
  @ApiProperty({
    description: 'Workout title',
    example: 'Everyday Yoga'
  })
  @IsString({ message: WORKOUT_VALIDATION_ERRORS.TitleLength})
  @Length( WORKOUT_FIELDS.TitleMin, WORKOUT_FIELDS.TitleMax, {message: WORKOUT_VALIDATION_ERRORS.TitleLength})
  public title?: string; //  длина 1 - 15 символов

  @ApiProperty({
    description: 'Path to workout image',
    example: 'uploads/image.png'
  })
  @IsString()
  backgroundImage?: string;  // обязательное поле; изображение в формате jpg/png


  @ApiProperty({
    description: 'Workout level',
    example: 'beginner'
  })
  @IsString()
  public level?: UserFitnessLevel;

  @ApiProperty({
    description: 'Workout type',
    example: 'yoga'
  })
  @IsString()
  public type?: WorkoutType;

  @ApiProperty({
    description: 'Workout duration',
    example: 'short'
  })
  @IsString()
  public duration?: WorkoutTime;

  @ApiProperty({
    description: 'Workout price',
    example: 100,
  })
  @IsInt()
  public price?: number;

  @ApiProperty({
    description: 'Number of calories',
    example: 1200,
  })
  @IsInt({ message: WORKOUT_VALIDATION_ERRORS.Calories })
  @Min(WORKOUT_FIELDS.CaloriesMin, { message: WORKOUT_VALIDATION_ERRORS.Calories })
  @Max(WORKOUT_FIELDS.CaloriesMax, { message: WORKOUT_VALIDATION_ERRORS.Calories })
  public calories?: number;

  @ApiProperty({
    description: 'Workout description',
    example: 'This is a great workout for beginners',
  })
  @IsString({ message: WORKOUT_VALIDATION_ERRORS.DescriptionLength })
  @Length(WORKOUT_FIELDS.DescriptionMin, WORKOUT_FIELDS.DescriptionMax, { message: WORKOUT_VALIDATION_ERRORS.DescriptionLength })
  public description?: string;

  @ApiProperty({
    description: 'Target gender',
    example: 'unimportant',
  })
  @IsString()
  public targetGender?: UserGender;

  @ApiProperty({
    description: 'Workout video',
    example: 'workout.mp4',
  })
  @IsString()
  public video?: string;

  @ApiProperty({
    description: 'Workout rating',
    example: 0,
  })
  @IsNumber({}, { message: WORKOUT_VALIDATION_ERRORS.Rating })
  @Min(WORKOUT_FIELDS.RatingMin, { message: WORKOUT_VALIDATION_ERRORS.Rating })
  @Max(WORKOUT_FIELDS.RatingMax, { message: WORKOUT_VALIDATION_ERRORS.Rating })
  public rating?: number;

  @ApiProperty({
    description: 'Special offer',
    example: false,
  })
  @IsBoolean({ message: WORKOUT_VALIDATION_ERRORS.SpecialOfferBoolean })
  public specialOffer?: boolean;
}
