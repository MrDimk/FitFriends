import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from '../user/user.module';
import {JwtModule} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {getJwtOptions} from '@backend/config/config-users';
import {JwtAccessStrategy} from './strategies/jwt-access.strategy';
import {NotifyModule} from '../notify/notify.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy],
  imports: [
    UserModule,
    JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: getJwtOptions
  }),
    NotifyModule
  ]
})
export class AuthModule {}
