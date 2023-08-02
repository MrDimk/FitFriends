import {JointTrainingInterface, JointTrainingStatus} from '@backend/shared/shared-types';

export class JointTrainingEntity implements JointTrainingInterface {
  public jointTrainingId?: number;
  public initiatorId: string;
  public userId: string;
  public createdAt: Date;
  public statusChangedAt: Date;
  public status: JointTrainingStatus;

  constructor(jointTraining: JointTrainingInterface) {
    this.fillEntity(jointTraining);
  }

  public fillEntity(jointTraining: JointTrainingInterface) {
    this.jointTrainingId = jointTraining.jointTrainingId;
    this.initiatorId = jointTraining.initiatorId;
    this.userId = jointTraining.userId;
    this.createdAt = jointTraining.createdAt;
    this.statusChangedAt = jointTraining.statusChangedAt;
    this.status = jointTraining.status;
  }

  public toObject(): JointTrainingEntity {
    return {...this};
  }
}
