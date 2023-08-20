import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule } from './app/app.module';
import {RequestIdInterceptor} from './app/interceptors/request-id.interceptor';
import {setupSwagger} from '@backend/util/util-core';

const DEFAULT_PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || DEFAULT_PORT;

  setupSwagger(
    app,
    'The "BFF" service',
    'API Gateway',
    '1.0.0'
  );

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalInterceptors(new RequestIdInterceptor());
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
