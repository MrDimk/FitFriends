import { EmailSubscriberEntity } from './email-subscriber.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmailSubscriberModel } from './email-subscriber.model';
import { Model } from 'mongoose';
import {CRUDRepository} from '@backend/util/util-types';
import {SubscriberInterface} from '@backend/shared/shared-types';

@Injectable()
export class EmailSubscriberRepository implements CRUDRepository<EmailSubscriberEntity, string, SubscriberInterface> {
  constructor(
    @InjectModel(EmailSubscriberModel.name) private readonly emailSubscriberModel: Model<EmailSubscriberModel>
  ) {}

  public async create(item: EmailSubscriberEntity): Promise<SubscriberInterface> {
    const newEmailSubscriber = new this.emailSubscriberModel(item);
    return newEmailSubscriber.save();
  }

  public async destroy(id: string): Promise<void> {
    this.emailSubscriberModel
      .deleteOne({ _id: id });
  }

  public async findById(id: string): Promise<SubscriberInterface | null> {
    return this.emailSubscriberModel
      .findOne({ _id: id })
      .exec();
  }

  public async update(id: string, item: EmailSubscriberEntity): Promise<SubscriberInterface> {
    return this.emailSubscriberModel
      .findByIdAndUpdate(id, item.toObject(), { new: true })
      .exec();
  }

  public async findByEmail(email: string): Promise<SubscriberInterface | null> {
    return this.emailSubscriberModel
      .findOne({ email })
      .exec()
  }
}
