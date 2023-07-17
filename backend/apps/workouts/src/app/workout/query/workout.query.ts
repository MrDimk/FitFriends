import {Transform} from 'class-transformer';
import {
  DEFAULT_SORT_DIRECTION,
  DEFAULT_SORT_TYPE,
  WORKOUTS_LIST_LIMIT
} from '../workout.const';
import {ArrayNotEmpty, IsEnum, IsIn, IsNumber, IsOptional} from 'class-validator';
import {WorkoutsSortType} from '@backend/shared/shared-types';
import {WorkoutTime} from '@prisma/client';

export class WorkoutQuery {
  //Sort and pagination:
  @Transform(({ value } ) => +value || WORKOUTS_LIST_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit?: number;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection?: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsOptional()
  public sortType?: WorkoutsSortType = DEFAULT_SORT_TYPE;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page?: number;

//Filters:
  @IsOptional()
  public priceMin?: number;

  @IsOptional()
  public priceMax?: number;

  @IsOptional()
  public caloriesMin?: number;

  @IsOptional()
  public caloriesMax?: number;

  @IsOptional()
  public ratingMin?: number; //Целое число от 0 до 5;

  @IsOptional()
  @IsOptional()
  @ArrayNotEmpty()
  @IsEnum(WorkoutTime, { each: true })
  public duration?: WorkoutTime[];
}
