import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Req} from '@nestjs/common';
import {WorkoutService} from './workout.service';
import {fillObject} from '@backend/util/util-core';
import {WorkoutRdo} from './rdo/workout.rdo';
import {WorkoutQuery} from './query/workout.query';
import {CreateWorkoutDto} from './dto/create-workout.dto';
import {UpdateWorkoutDto} from './dto/update-workout.dto';
import {RequestWithUser} from '@backend/shared/shared-types';

@Controller('workouts')
export class WorkoutController {
  constructor(
    private readonly workoutService: WorkoutService
  ) {}

  @Get('/')
  async index(@Query() query: WorkoutQuery) {
    const workouts = this.workoutService.getWorkouts(query);
    return fillObject(WorkoutRdo, workouts);
  }

  @Get('/:id')
  async show(@Param('id') id: number) {
    const existWorkout = this.workoutService.getWorkout(id);
    return fillObject(WorkoutRdo, existWorkout);
  }

  @Post('/')
  async create(@Body() dto: CreateWorkoutDto, @Req() request: RequestWithUser) {
    console.log(dto);
    const newWorkout = this.workoutService.createWorkout(dto);
    return fillObject(WorkoutRdo, newWorkout);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.workoutService.deleteWorkout(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateWorkoutDto) {
    const updatedWorkout = this.workoutService.updateWorkout(id, dto);
    return fillObject(WorkoutRdo, updatedWorkout);
  }

}

