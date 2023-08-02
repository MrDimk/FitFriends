import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import {JointTrainingStatus} from '@backend/shared/shared-types';

export class ChangeStatusJointTrainingDto {
  @IsNotEmpty()
  @IsNumber()
  jointTrainingId: number;

  @IsNotEmpty()
  @IsEnum(JointTrainingStatus)
  status: JointTrainingStatus;
}
