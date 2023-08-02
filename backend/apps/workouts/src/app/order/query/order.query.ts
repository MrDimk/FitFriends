import {IsIn, IsOptional} from 'class-validator';

const DEFAULT_SORT_DIRECTION = 'asc';

export class OrderQuery {
  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sort?: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsOptional()
  limit?: number;

//Filters:
  @IsOptional()
  public trainerId?: string;

  @IsOptional()
  public userId?: string;

  @IsOptional()
  public workoutId?: string;
}
