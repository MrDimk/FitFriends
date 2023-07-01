import {UserInterface} from './user.interface';
import {UserFitnessLevel} from './user-fitness-level.enum';
import {WorkoutTime} from './workout-time.enum';
import {WorkoutType} from './workout-type.enum';

export interface CommonUserInterface extends UserInterface {
  fitnessLevel: UserFitnessLevel;
  workoutTypes: WorkoutType[];
  workoutTime: WorkoutTime;
  dailyCalorieBurn: number;
  calorieBurnGoal: number;
  readyToTrain: boolean;
}
