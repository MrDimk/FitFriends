import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from '../auth.service';
import {UserEntity} from '../../user/user.entity';
import {Strategy} from 'passport-local';

const USERNAME_FIELD_NAME = 'email';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({usernameField: USERNAME_FIELD_NAME});
  }

  public async validate(email: string, password: string): Promise<UserEntity> {
    return this.authService.verifyUser({email, password});
  }

}
