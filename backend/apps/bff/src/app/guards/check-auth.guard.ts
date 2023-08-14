import {CanActivate, ExecutionContext, ForbiddenException, Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {ApplicationServiceURL} from '../app.config';
import {Reflector} from '@nestjs/core';
import {WORKOUT_EXCEPTIONS} from '../const/workout.const';

@Injectable()
export class CheckAuthGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
    private readonly reflector: Reflector,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/check`, {}, {
      headers: {
        'Authorization': request.headers['authorization']
      }
    })

    request['user'] = data;

    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (requiredRoles) {
      const userRole = data.role;
      if (!requiredRoles.includes(userRole)) {
        throw new ForbiddenException(WORKOUT_EXCEPTIONS.RoleAccessDenied);
      }
    }

    return true;
  }
}
