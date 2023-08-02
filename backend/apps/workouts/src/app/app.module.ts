import { Module } from '@nestjs/common';

import { WorkoutModule } from './workout/workout.module';
import { PrismaModule } from './prisma/prisma.module';
import { WorkoutRepository } from './workout/workout.repository';
import { WorkoutService } from './workout/workout.service';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';
import { JointTrainingModule } from './joint-training/joint-training.module';

@Module({
  imports: [
    WorkoutModule,
    PrismaModule,
    OrderModule,
    ReviewModule,
    JointTrainingModule,
  ],
  controllers: [],
  providers: [WorkoutRepository, WorkoutService, PrismaService],
})
export class AppModule {}
