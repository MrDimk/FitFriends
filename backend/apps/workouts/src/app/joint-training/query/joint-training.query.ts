import {IsEnum, IsInt, IsOptional, Max, Min} from 'class-validator';
import {SortOrder} from '@backend/shared/shared-types';
import {JOINT_TRAININGS_LIST_LIMIT} from '../joint-training.const';

export class JointTrainingQuery {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(JOINT_TRAININGS_LIST_LIMIT)
  limit?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;
}
