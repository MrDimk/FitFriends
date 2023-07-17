import {Injectable} from '@nestjs/common';
import {WorkoutRepository} from './workout.repository';
import {CreateWorkoutDto} from './dto/create-workout.dto';
import {WorkoutInterface} from '@backend/shared/shared-types';
import {WorkoutEntity} from './workout.entity';
import {UpdateWorkoutDto} from './dto/update-workout.dto';
import {WorkoutQuery} from './query/workout.query';

@Injectable()
export class WorkoutService {
  constructor(
    private  readonly workoutRepository: WorkoutRepository
  ) {}

  async createWorkout(dto: CreateWorkoutDto): Promise<WorkoutInterface> {
    const workoutEntity = new WorkoutEntity(dto);
    return this.workoutRepository.create(workoutEntity);
  }

  async deleteWorkout(id: number): Promise<void> {
    this.workoutRepository.destroy(id);
  }

  async getWorkout(id: number): Promise<WorkoutInterface | null> {
    return this.workoutRepository.findById(id);
  }

  async getWorkouts(query: WorkoutQuery): Promise<WorkoutInterface[]> {
    return this.workoutRepository.find(query);
  }

  async updateWorkout(id: number, _dto: UpdateWorkoutDto): Promise<WorkoutInterface | null> {
    throw new Error('Not implemented…');
  }
}
