import {plainToInstance, ClassConstructor} from 'class-transformer';
import {CommonUserInterface, TrainerUserInterface, UserRole} from '@backend/shared/shared-types';

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});
}

export function isCommonUser(user: CommonUserInterface | TrainerUserInterface): user is CommonUserInterface {
  return user.role === UserRole.User;
}

export function isTrainerUser(user: CommonUserInterface | TrainerUserInterface): user is TrainerUserInterface {
  return user.role === UserRole.Trainer;
}

export function getMongoConnectionString({username, password, host, port, databaseName, authDatabase}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
