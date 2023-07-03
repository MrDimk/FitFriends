import {UserFitnessLevel, UserLocation, UserRole, WorkoutTime, WorkoutType} from '@backend/shared/shared-types';

export class CreateUserDto {
  public email: string;
  public fitnessLevel: UserFitnessLevel;
  public gender: string;
  public location: UserLocation;
  public name: string;
  public description?: string;
  public birthDate?: Date;
  public password: string;
  public role: UserRole;
  public workoutTypes: WorkoutType[];
  public avatarImage?: string;
  public pageImage?: string;

  public workoutTime?: WorkoutTime;
  public dailyCalorieBurn?: number;
  public calorieBurnGoal?: number;
  public readyToTrain?: boolean;

  public certificates?: string[];
  public achievements?: string;
  public readyForPersonalTraining?: boolean;
}
