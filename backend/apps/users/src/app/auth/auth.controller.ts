import {Body, Controller, Post, Get, Param, HttpStatus, UseGuards, Req} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateUserDto} from './dto/create-user.dto';
import {RequestWithTokenPayload, RequestWithUser, UserRole} from '@backend/shared/shared-types';
import {TrainerUserRdo} from './rdo/trainer-user.rdo';
import {CommonUserRdo} from './rdo/common-user.rdo';
import {fillObject} from '@backend/util/util-core';
import {LoggedUserRdo} from './rdo/logged-user.rdo';
import {ApiResponse, ApiTags, getSchemaPath} from '@nestjs/swagger';
import {MongoidValidationPipe} from '@backend/shared/shared-pipes';
import {JwtAuthGuard} from './guards/jwt-auth.guard';
import {LocalAuthGuard} from './guards/local-auth-guard';
import {JwtRefreshGuard} from './guards/jwt-refresh.guard';
import {getMockUser} from './seed/auth.mock';
import {DevelopmentModeGuard} from '../../../../../libs/shared/shared-pipes/src/lib/development-mode.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    if(newUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, newUser);
    } else if(newUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, newUser);
    }
  }

  @UseGuards(LocalAuthGuard)
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
  public async login(@Req() {user}: RequestWithUser) {
    return this.authService.createUserToken(user);
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
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.authService.getUser(id);
    if(existUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, existUser);
    } else if(existUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, existUser);
    }
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get new access/refresh tokens'
  })
  public async refreshToken(@Req() {user}: RequestWithUser) {
    return this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() {user: payload}: RequestWithTokenPayload) {
    return payload;
  }

  @UseGuards(DevelopmentModeGuard)
  @Post('seed')
  public async seedMockUsers(@Body('count') count: number, @Body('role') role: UserRole) {
    const result = [];

    for(let i = 0; i < count; i++) {
      const newUser = await this.authService.register(getMockUser(role))
      if(newUser.role === UserRole.User) {
        result.push(fillObject(CommonUserRdo, newUser));
      } else if(newUser.role === UserRole.Trainer) {
        result.push(fillObject(TrainerUserRdo, newUser));
      }
    }

    return result;
  }

  // @ApiResponse({
  //   type: LoggedUserRdo,
  //   status: HttpStatus.OK,
  //   description: 'User has been successfully logged.'
  // })
  // @ApiResponse({
  //   status: HttpStatus.UNAUTHORIZED,
  //   description: 'Password or Login is wrong.',
  // })
  // @Post('subscribe')
  // public async subscribe(@Body() dto: CreateSubscriberDto) {
  //   const verifiedUser = await this.authService.verifyUser(dto);
  //   const loggedUser = await this.authService.createUserToken(verifiedUser);
  //   return fillObject(LoggedUserRdo, Object.assign(verifiedUser, loggedUser));
  // }

}
