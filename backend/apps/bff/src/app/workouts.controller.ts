import {Body, Controller, Post, Req, UseFilters, UseGuards, UseInterceptors} from '@nestjs/common';
import {CheckAuthGuard} from './guards/check-auth.guard';
import {UserIdInterceptor} from './interceptors/user-id.interceptor';
import {CreateWorkoutDto} from './dto/workouts/create-workout.dto';
import {HttpService} from '@nestjs/axios';
import {AxiosExceptionFilter} from './filters/axios-exception.filter';
import {ApplicationServiceURL} from './app.config';
import {UserRole} from '@backend/shared/shared-types';
import {Roles} from './guards/roles.decorator';

@Controller('workouts')
@UseFilters(AxiosExceptionFilter)
export class WorkoutsController {
  constructor(
    private readonly httpService: HttpService
  ) {
  }

  @UseGuards(CheckAuthGuard)
  @Roles(UserRole.Trainer)
  @UseInterceptors(UserIdInterceptor)
  @Post('/')
  public async createWorkout(@Body() dto: CreateWorkoutDto, @Req() { user }) {
      const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Workouts}`, {...dto, trainerId: user.sub})
      return data;
  }
}



