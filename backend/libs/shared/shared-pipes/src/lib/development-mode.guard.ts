import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class DevelopmentModeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    if (process.env.NODE_ENV !== 'development') {
      throw new ForbiddenException('This action is allowed only in development environment');
    }
    return true;
  }
}
