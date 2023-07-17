import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {setupSwagger} from '@backend/util/util-core';

const DEFAULT_PORT = 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || DEFAULT_PORT;

  setupSwagger(
    app,
    'The "Workouts" service',
    'Workouts service API',
    '1.0.0'
  );

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
