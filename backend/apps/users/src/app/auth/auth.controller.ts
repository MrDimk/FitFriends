import {Body, Controller, Post, Get, Param} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UserRole} from '@backend/shared/shared-types';
import {TrainerUserRdo} from './rdo/trainer-user.rdo';
import {CommonUserRdo} from './rdo/common-user.rdo';
import {fillObject} from '@backend/util/util-core';
import {LoginUserDto} from './dto/login-user.dto';
import {LoggedUserRdo} from './rdo/logged-user.rdo';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    if(newUser.role === UserRole.User) {
      fillObject(CommonUserRdo, newUser);
    } else if(newUser.role === UserRole.Trainer) {
      fillObject(TrainerUserRdo, newUser);
    }
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    if(existUser.role === UserRole.User) {
      fillObject(CommonUserRdo, existUser);
    } else if(existUser.role === UserRole.Trainer) {
      fillObject(TrainerUserRdo, existUser);
    }
  }
}
