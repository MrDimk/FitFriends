import {Injectable} from '@nestjs/common';
import {CRUDRepository} from '@backend/util/util-types';
import {WorkoutEntity} from './workout.entity';
import {WorkoutInterface} from '@backend/shared/shared-types';
import {PrismaService} from '../prisma/prisma.service';
import {when} from 'joi';
import {WorkoutQuery} from './query/workout.query';
import {WORKOUTS_LIST_LIMIT} from './workout.const';


@Injectable()
export class WorkoutRepository implements CRUDRepository<WorkoutEntity, number, WorkoutInterface> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: WorkoutEntity): Promise<WorkoutInterface> {
    return this.prisma.workout.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(workoutId: number): Promise<void> {
    await this.prisma.workout.delete({
      where: {workoutId}
    })
  }

  public async findById(workoutId: number): Promise<WorkoutInterface | null> {
    return this.prisma.workout.findFirst({
      where: {workoutId}
    });
  }

  public find(query: WorkoutQuery): Promise<WorkoutInterface[]> {
    const limit = query.limit ?? WORKOUTS_LIST_LIMIT;
    return this.prisma.workout.findMany({
      take: limit,
    });
  }

  public async update(workoutId: number, item: WorkoutEntity): Promise<WorkoutInterface> {
    return this.prisma.workout.update({
      where: {workoutId},
      data: {...item.toObject(), workoutId}
    })
  }

}
