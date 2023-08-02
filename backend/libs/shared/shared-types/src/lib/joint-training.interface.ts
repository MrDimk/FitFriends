import {JointTrainingStatus} from './joint-training-status.enum';

export interface JointTrainingInterface {
  jointTrainingId?: number;
  initiatorId: string;
  userId: string;
  createdAt: Date;
  statusChangedAt: Date;
  status: JointTrainingStatus;
}
