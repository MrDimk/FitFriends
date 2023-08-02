import {Injectable} from '@nestjs/common';
import {OrderRepository} from './order.repository';
import {OrderEntity} from './order.entity';
import {CreateOrderDto} from './dto/create-order.dto';
import {OrderInterface} from '@backend/shared/shared-types';
import {OrderQuery} from './query/order.query';

@Injectable()
export class OrderService {
  constructor(
    private  readonly orderRepository: OrderRepository
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<OrderInterface> {
    const orderEntity = new OrderEntity(dto);
    return this.orderRepository.create(orderEntity);
  }

  async getOrder(id: number): Promise<OrderInterface | null> {
    return this.orderRepository.findById(id);
  }

  async getOrders(query: OrderQuery): Promise<OrderInterface[]> {
    return this.orderRepository.find(query);
  }

  // async getOrdersByTrainerId(trainerId: string): Promise<OrderInterface[]> {
  //   return this.orderRepository.findByTrainerId(trainerId);
  // }
  //
  // async getOrdersByUserId(trainerId: string): Promise<OrderInterface[]> {
  //   return this.orderRepository.findByTrainerId(trainerId);
  // }

  async deleteOrder(id: number): Promise<void> {
    this.orderRepository.destroy(id);
  }
}
