import {EntityInterface} from '@backend/util/util-types';
import {SubscriberInterface} from '@backend/shared/shared-types';


export class EmailSubscriberEntity implements EntityInterface<EmailSubscriberEntity>, SubscriberInterface {
  public id: string;
  public email: string;
  public name: string;
  public userId: string;

  constructor(emailSubscriber: SubscriberInterface) {
    this.fillEntity(emailSubscriber);
  }

  public fillEntity(entity) {
    this.email = entity.email;
    this.name = entity.lastname;
    this.id = entity.id ?? '';
  }

  public toObject(): EmailSubscriberEntity {
    return { ...this };
  }
}
