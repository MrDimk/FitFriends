import {JointTrainingStatus} from '@prisma/client';

export interface JointTrainingInterface {
  jointTrainingId?: number;
  initiatorId: string;
  userId: string;
  createdAt?: Date;
  statusChangedAt?: Date;
  status?: JointTrainingStatus;
}
