import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpStatus,
  UseGuards,
  Req,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  CommonUserRdo,
  LoggedUserRdo,
  RequestWithTokenPayload,
  RequestWithUser,
  TrainerUserRdo,
  UpdateUserDto,
  UserRole, UsersListRdo,
} from '@backend/shared/shared-types';
import { fillObject } from '@backend/util/util-core';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import {
  DevelopmentModeGuard,
  MongoidValidationPipe,
} from '@backend/shared/shared-pipes';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { getMockUser } from './seed/auth.mock';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly refreshTokenService: RefreshTokenService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    if (newUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, newUser);
    } else if (newUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, newUser);
    }
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  public async login(@Req() { user }: RequestWithUser) {
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
    if (existUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, existUser);
    } else if (existUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, existUser);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  public async showAllUsers(@Body() body): Promise<UsersListRdo> {
    const { userId, ...query } = body;
    const data = await this.authService.getUsers(userId, query);
    const users = data.users.map((user) => {
      if (user.role === UserRole.User) {
        return fillObject(CommonUserRdo, user);
      } else if (user.role === UserRole.Trainer) {
        return fillObject(TrainerUserRdo, user);
      }
    });

    const { totalCount, limit, page } = data;
    return { users, totalCount, limit, page };
  }

  // public async showAllUsers(@Body() body): Promise<UsersListRdo> {
  //   const { userId, ...query } = body;
  //   console.log('Users.auth-controller.showAllUsers() ', userId);
  //   console.log('Users.auth-controller.showAllUsers() ', query);
  //   const data = await this.authService.getUsers(userId, query);
  //   console.log(data);
  //   const users = data.users.map((user) => {
  //       if (user.role === UserRole.User) {
  //         return fillObject(CommonUserRdo, user);
  //       } else if (user.role === UserRole.Trainer) {
  //         return fillObject(TrainerUserRdo, user);
  //       }
  //   });
  //
  //   const {limit, page} = data;
  //   return {users, limit, page};
  // }

  @UseGuards(JwtRefreshGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get new access/refresh tokens',
  })
  @Post('refresh')
  public async refreshToken(@Req() { user }: RequestWithUser) {
    console.log(user);
    return this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    return payload;
  }

  @UseGuards(DevelopmentModeGuard)
  @Post('seed')
  public async seedMockUsers(
    @Body('count') count: number,
    @Body('role') role: UserRole
  ) {
    const result = [];

    for (let i = 0; i < count; i++) {
      const newUser = await this.authService.register(getMockUser(role));
      if (newUser.role === UserRole.User) {
        result.push(fillObject(CommonUserRdo, newUser));
      } else if (newUser.role === UserRole.Trainer) {
        result.push(fillObject(TrainerUserRdo, newUser));
      }
    }

    return result;
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
  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  public async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    console.log('Update user Auth controller: ', id);
    console.log('Update user Auth controller: ', dto);
    const updatedUser = await this.authService.updateUser(id, dto);
    if (updatedUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, updatedUser);
    } else if (updatedUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, updatedUser);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Users list founded.',
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CommonUserRdo) },
        { $ref: getSchemaPath(TrainerUserRdo) },
      ],
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('all')
  public async getAllUsers(@Param('id', MongoidValidationPipe) id: string) {
    console.log('User data request - ', id);
    const existUser = await this.authService.getUser(id);
    if (existUser.role === UserRole.User) {
      return fillObject(CommonUserRdo, existUser);
    } else if (existUser.role === UserRole.Trainer) {
      return fillObject(TrainerUserRdo, existUser);
    }
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Refresh token has been successfully deleted.',
  })
  @Post('refresh/delete')
  public async deleteRefreshToken(@Body() { user }) {
    console.log('Auth refresh delete controller - ', user);
    return this.refreshTokenService.deleteTokenByUserId(user.sub);
  }
}
