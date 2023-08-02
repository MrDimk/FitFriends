import { Module } from '@nestjs/common';
import {ConfigNotifyModule} from '@backend/config/config-notify';
import {MongooseModule} from '@nestjs/mongoose';
import {getMongooseOptions} from '@backend/util/util-core';
import {EmailSubscriberModule} from './email-subscriber/email-subscriber.module';

@Module({
  imports: [
    ConfigNotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions('application.db')),
    EmailSubscriberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
