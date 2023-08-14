import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailSubscriberService } from './email-subscriber.service';
import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import {RabbitRouting} from '@backend/shared/shared-types';
import {DeleteSubscriberDto} from './dto/delete-subscriber.dto';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
  ) {}

  @RabbitSubscribe({
    exchange: 'fit-friends.notify',
    routingKey: RabbitRouting.SubscribeToTrainer,
    queue: 'fit-friends.notify',
  })
  public async create(subscriber: CreateSubscriberDto) {
    this.subscriberService.addSubscriber(subscriber);
  }

  @RabbitSubscribe({
    exchange: 'fit-friends.notify',
    routingKey: RabbitRouting.UnsubscribeFromTrainer,
    queue: 'fit-friends.notify',
  })
  public async delete(subscriber: DeleteSubscriberDto) {
    this.subscriberService.removeSubscriber(subscriber);
  }
}
