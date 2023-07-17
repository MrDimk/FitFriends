import {Logger, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import {ConfigService} from '@nestjs/config';
import {setupSwagger} from '@backend/util/util-core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const configService = app.get(ConfigService);
  const port = configService.get('application.port')

  setupSwagger(
    app,
    'The "Users" service',
    'Users service API',
    '1.0.0'
    );

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `🎯  Current mode: ${configService.get('application.environment')}`
  )
}

bootstrap();
