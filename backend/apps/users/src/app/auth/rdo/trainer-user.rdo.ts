import { Expose } from 'class-transformer';
import {UserFitnessLevel, UserLocation, UserRole, WorkoutType} from '@backend/shared/shared-types';

export class TrainerUserRdo {
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
  public certificates: string[];

  @Expose()
  public achievements: string;

  @Expose()
  public readyForPersonalTraining: boolean;
}
