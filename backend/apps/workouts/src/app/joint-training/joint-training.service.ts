import {Injectable} from '@nestjs/common';
import {JointTrainingRepository} from './joint-training.repository';
import {JointTrainingInterface} from '@backend/shared/shared-types';
import {CreateJointTrainingDto} from './dto/create-joint-training.dto';
import {JointTrainingEntity} from './joint-training.entity';
import {ChangeStatusJointTrainingDto} from './dto/change-status-joint-training.dto';
import {JointTrainingQuery} from './query/joint-training.query';

@Injectable()
export class WorkoutService {
  constructor(
    private  readonly jointTrainingRepository: JointTrainingRepository
  ) {}

  async createWorkout(dto: CreateJointTrainingDto): Promise<JointTrainingInterface> {
    const jointTrainingEntity = new JointTrainingEntity(dto);
    return this.jointTrainingRepository.create(jointTrainingEntity);
  }

  async deleteWorkout(id: number): Promise<void> {
    this.jointTrainingRepository.destroy(id);
  }

  async getJointTraining(id: number): Promise<JointTrainingInterface | null> {
    return this.jointTrainingRepository.findById(id);
  }

  async getJointTrainings(query: JointTrainingQuery): Promise<JointTrainingInterface[]> {
    return this.jointTrainingRepository.find(query);
  }

  async update(id: number, dto: ChangeStatusJointTrainingDto): Promise<JointTrainingInterface | null> {
    const existedJointTraining = await this.getJointTraining(id);
    const updatedJointTraining = new JointTrainingEntity({...existedJointTraining, status: dto.status})
    return this.jointTrainingRepository.update(id, updatedJointTraining)
  }
}
