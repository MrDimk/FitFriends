import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {fillObject} from '@backend/util/util-core';
import {OrderService} from './order.service';
import {CreateOrderDto} from './dto/create-order.dto';
import {OrderRdo} from './rdo/order.rdo';
import {OrderQuery} from './query/order.query';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  @Get('/')
  async index(@Query() query: OrderQuery) {
    const workouts = this.orderService.getOrders(query);
    return fillObject(OrderRdo, workouts);
  }

  @Get('/:id')
  async show(@Param('id') id: number) {
    const existWorkout = this.orderService.getOrder(id);
    return fillObject(OrderRdo, existWorkout);
  }

  @Post('/')
  async create(@Body() dto: CreateOrderDto) {
    const newOrder = this.orderService.createOrder(dto);
    return fillObject(OrderRdo, newOrder);
  }
}

