import {JointTrainingInterface, SortOrder} from '@backend/shared/shared-types';
import {CRUDRepository} from '@backend/util/util-types';
import {JointTrainingEntity} from './joint-training.entity';
import {PrismaService} from '../prisma/prisma.service';
import {Injectable} from '@nestjs/common';
import {JointTrainingQuery} from './query/joint-training.query';

@Injectable()
export class JointTrainingRepository implements CRUDRepository<JointTrainingEntity, number, JointTrainingInterface> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: JointTrainingEntity): Promise<JointTrainingInterface> {
    return this.prisma.jointTraining.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public async destroy(jointTrainingId: number): Promise<void> {
    await this.prisma.jointTraining.delete({
      where: {jointTrainingId}
    })
  }

  public async findById(jointTrainingId: number): Promise<JointTrainingInterface | null> {
    return this.prisma.jointTraining.findFirst({
      where: {jointTrainingId}
    });
  }

  public find(query: JointTrainingQuery): Promise<JointTrainingInterface[]> {
    const { limit, page, sortOrder} = query;

    const offset = (page - 1) * limit;
    const order = sortOrder === SortOrder.DESC ? SortOrder.DESC : SortOrder.ASC;

    return this.prisma.jointTraining.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: order,
      },
    });
  }

  public async update(jointTrainingId: number, item: JointTrainingEntity): Promise<JointTrainingInterface> {
    return this.prisma.jointTraining.update({
      where: {jointTrainingId},
      data: {...item.toObject(), jointTrainingId}
    })
  }

}
