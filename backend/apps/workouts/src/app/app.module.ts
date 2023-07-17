import { Module } from '@nestjs/common';

import { WorkoutModule } from './workout/workout.module';
import { PrismaModule } from './prisma/prisma.module';
import {WorkoutRepository} from './workout/workout.repository';
import {WorkoutService} from './workout/workout.service';
import {PrismaService} from './prisma/prisma.service';

@Module({
  imports: [WorkoutModule, PrismaModule],
  controllers: [],
  providers: [WorkoutRepository, WorkoutService, PrismaService],
})
export class AppModule {}
