import { Expose } from 'class-transformer';
import {UserFitnessLevel, UserLocation, UserRole, WorkoutTime, WorkoutType} from '@backend/shared/shared-types';

export class CommonUserRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public description?: string;

  @Expose()
  public gender: string;

  @Expose()
  public birthDate?: Date;

  @Expose()
  public role: UserRole;

  @Expose()
  public location: UserLocation;

  @Expose()
  public avatarImage: string;

  @Expose()
  public pageImage: string;

  @Expose()
  public fitnessLevel: UserFitnessLevel;

  @Expose()
  public workoutTypes: WorkoutType[];

  @Expose()
  public workoutTime: WorkoutTime;

  @Expose()
  public dailyCalorieBurn: number;

  @Expose()
  public calorieBurnGoal: number;

  @Expose()
  public readyToTrain: boolean;
}
