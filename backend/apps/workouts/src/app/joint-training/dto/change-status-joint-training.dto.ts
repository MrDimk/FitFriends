import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import {JointTrainingStatus} from '@prisma/client';

export class ChangeStatusJointTrainingDto {
  @IsNotEmpty()
  @IsNumber()
  jointTrainingId: number;

  @IsNotEmpty()
  @IsEnum(JointTrainingStatus)
  status: JointTrainingStatus;
}
