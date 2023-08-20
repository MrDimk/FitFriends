import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post, Query,
  Req,
  UseFilters,
  UseGuards, UseInterceptors,
} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {ApplicationServiceURL} from './app.config';
import {CreateUserDto} from './dto/users/create-user.dto';
import {LoginUserDto} from './dto/users/login-user.dto';
import {AxiosExceptionFilter} from './filters/axios-exception.filter';
import {ApiResponse, ApiTags, getSchemaPath} from '@nestjs/swagger';
import {CheckAuthGuard} from './guards/check-auth.guard';
import {
  CommonUserRdo,
  LoggedUserRdo,
  RequestWithUser,
  TrainerUserRdo,
  UpdateUserDto, UserRole,
  UsersQueryDto
} from '@backend/shared/shared-types';
import * as url from 'url';
import {UserIdInterceptor} from './interceptors/user-id.interceptor';
import {Roles} from './guards/roles.decorator';

@ApiTags('Authentication')
@Controller('users')
@UseFilters(AxiosExceptionFilter)
export class UsersController {
  constructor(
    private readonly httpService: HttpService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async createUser(@Body() dto: CreateUserDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/register`, dto);
    return data;
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  public async loginUser(@Body() dto: LoginUserDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/login`, dto);
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get new access/refresh tokens'
  })
  @Post('refresh')
  public async refreshToken(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/refresh`, null, {
      headers: {
        'Authorization': req.headers['authorization']
      }
    });
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully found.',
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CommonUserRdo) },
        { $ref: getSchemaPath(TrainerUserRdo) },
      ],
    },
  })
  @UseGuards(CheckAuthGuard)
  @Get(':id')
  public async showUser(@Req() req: Request, @Param('id') id: string) {
    const { data } = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Users}/${id}`,  {
      headers: {
        'Authorization': req.headers['authorization']
      }
    });
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The users have been successfully retrieved.',
    isArray: true,
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CommonUserRdo) },
        { $ref: getSchemaPath(TrainerUserRdo) },
      ],
    },
  })
  @UseGuards(CheckAuthGuard)
  @Roles(UserRole.User)
  @UseInterceptors(UserIdInterceptor)
  @Get('')
  public async showList(@Req() req, @Query() query: UsersQueryDto) {
    const { data } = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Users}`,  {
      data : {...query, userId: req.user.sub},
      headers: {
        'Authorization': req.headers['authorization']
      }
    });
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User data has been successfully updated.',
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CommonUserRdo) },
        { $ref: getSchemaPath(TrainerUserRdo) },
      ],
    },
  })
  @UseGuards(CheckAuthGuard)
  @Patch('update')
  public async update(@Body() dto: UpdateUserDto, @Req() req) {
    console.log('Update user bff controller: ', req.user);
    console.log('Update user bff controller: ', dto);
    const { data } = await this.httpService.axiosRef.patch(`${ApplicationServiceURL.Users}/update/${req.user.sub}`, dto, {
      headers: {
        'Authorization': req.headers['authorization']
      },
    });
    return data;
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Refresh token has been successfully deleted.',
  })
  // @UseGuards(CheckAuthGuard)
  // @UseInterceptors(UserIdInterceptor)
  @Post('refresh/delete')
  public async deleteRefreshToken(@Req() req) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/refresh/delete`, {user: req.user}, {
        headers: {
          'Authorization': req.headers['authorization']
        },
    });
    return data;
  }
}
