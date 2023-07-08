import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {
  CommonUserInterface,
  TokenPayloadInterface,
  TrainerUserInterface,
  UserInterface,
  UserRole
} from '@backend/shared/shared-types';
import dayjs from 'dayjs';
import {AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG, INVALID_USER_ROLE} from './auth.const';
import {UserEntity} from '../user/user.entity';
import {LoginUserDto} from './dto/login-user.dto';
import {ConfigService} from '@nestjs/config';
import {UserRepository} from '../user/user.repository';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
  }

  public async register(dto: CreateUserDto) {
    const {role, password, ...userData} = dto;

    const user = {
      ...userData,
      role: UserRole[role],
      avatarImage: userData.avatarImage || '',
      pageImage: userData.pageImage || '',
      birthDate: dayjs(userData.birthDate).toDate(),
      passwordHash: '',
    };

    const existUser = await this.userRepository.findByEmail(userData.email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    let userEntity;
    if(user.role == UserRole.User) {
      userEntity = await new UserEntity(user as CommonUserInterface);
    } else if(user.role === UserRole.Trainer) {
      userEntity = await new UserEntity(user as TrainerUserInterface);
    } else {
      throw new ConflictException(INVALID_USER_ROLE)
    }

    await userEntity.setPassword(password);

    return this.userRepository.create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const userEntity = new UserEntity(existUser);
    if (!await userEntity.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return userEntity.toObject();
  }

  public async getUser(id: string) {
    return this.userRepository.findById(id);
  }

  public async createUserToken(user: UserInterface) {
    const payload: TokenPayloadInterface = {
      sub: user._id,
      email: user.email,
      role: user.role,
      name: user.name
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
