import { Module } from '@nestjs/common';
import {WorkoutService} from './workout.service';
import {WorkoutRepository} from './workout.repository';
import {WorkoutController} from './workout.controller';
import {PrismaModule} from '../prisma/prisma.module';

@Module({
  providers: [WorkoutService, WorkoutRepository],
  imports: [PrismaModule],
  controllers: [WorkoutController],
  exports: [WorkoutService]
})
export class WorkoutModule {}
