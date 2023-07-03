import {CommonUserInterface, TrainerUserInterface} from '@backend/shared/shared-types';
import {CRUDRepository} from '@backend/util/util-types';
import {Injectable} from '@nestjs/common';
import {UserEntity} from './user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UserMemoryRepository implements CRUDRepository<UserEntity, string, CommonUserInterface | TrainerUserInterface> {
  private repository: {[key: string]: CommonUserInterface | TrainerUserInterface} = {};

  public async create(item: UserEntity): Promise<CommonUserInterface | TrainerUserInterface> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    console.log(entry);
    return entry;
  }

  public async findById(id: string): Promise<CommonUserInterface | TrainerUserInterface> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async findByEmail(email: string): Promise<CommonUserInterface | TrainerUserInterface | null> {
    const existUser = Object.values(this.repository)
      .find((userItem) => userItem.email === email);

    if (! existUser) {
      return null;
    }

    return { ...existUser};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: UserEntity): Promise<CommonUserInterface | TrainerUserInterface> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }
}
