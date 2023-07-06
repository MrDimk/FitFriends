import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {CRUDRepository} from '@backend/util/util-types';
import {InjectModel} from '@nestjs/mongoose';
import {CommonUserInterface, TrainerUserInterface} from '@backend/shared/shared-types';
import {UserEntity} from './user.entity';
import {UserModel} from './user.model';

@Injectable()
export class UserRepository implements CRUDRepository<UserEntity, string, CommonUserInterface | TrainerUserInterface> {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>) {
  }

  public async create(item: UserEntity): Promise<CommonUserInterface | TrainerUserInterface> {
    const newUser = new this.userModel(item);
    console.log('Create method in user-repository, new user: ', newUser);
    return newUser.save();
  }

  public async destroy(id: string): Promise<void> {
    await this.userModel
      .deleteOne({_id: id})
      .exec();
  }

  public async findById(id: string): Promise<CommonUserInterface | TrainerUserInterface | null> {
    return this.userModel
      .findOne({_id: id})
      .exec();
  }

  public async findByEmail(email: string): Promise<CommonUserInterface | TrainerUserInterface | null> {
    return this.userModel
      .findOne({email})
      .exec();
  }

  public async update(id: string, item: UserEntity): Promise<CommonUserInterface | TrainerUserInterface> {
    return this.userModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
