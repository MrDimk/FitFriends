import {Injectable, NotImplementedException} from '@nestjs/common';
import {CRUDRepository} from '@backend/util/util-types';
import {OrderInterface} from '@backend/shared/shared-types';
import {OrderEntity} from './order.entity';
import {PrismaService} from '../prisma/prisma.service';
import {ORDER_DEFAULT} from './order.const';
import {OrderQuery} from './query/order.query';

@Injectable()
export class OrderRepository implements CRUDRepository<OrderEntity, number, OrderInterface> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: OrderEntity): Promise<OrderInterface> {
    return this.prisma.order.create({
      data: {...item.toObject()}
    });
  }

  public async destroy(orderId: number): Promise<void> {
    await this.prisma.order.delete({
      where: {orderId}
    })
  }

  public async findById(orderId: number): Promise<OrderInterface | null> {
    return this.prisma.order.findFirst({
      where: {orderId}
    });
  }

  public find(query: OrderQuery): Promise<OrderInterface[]> {
    const limit = query.limit ?? ORDER_DEFAULT.MIN_AMOUNT;
    return this.prisma.order.findMany({
      take: limit,
    });
  }

  public async update(orderId: number, item: OrderEntity): Promise<OrderInterface> {
    throw new NotImplementedException();
  }

}
