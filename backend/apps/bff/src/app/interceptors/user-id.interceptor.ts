import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';

@Injectable()
export class UserIdInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    request.body['userId'] = request.user.sub;
    request.body['userRole'] = request.user.role;

    return next.handle();
  }
}
