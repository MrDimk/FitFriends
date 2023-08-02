import { Module } from '@nestjs/common';
import {PrismaModule} from '../prisma/prisma.module';
import {OrderService} from './order.service';
import {OrderRepository} from './order.repository';
import {OrderController} from './order.controller';


@Module({
  providers: [OrderService, OrderRepository],
  imports: [PrismaModule],
  controllers: [OrderController],
  exports: [OrderService]
})
export class OrderModule {}
