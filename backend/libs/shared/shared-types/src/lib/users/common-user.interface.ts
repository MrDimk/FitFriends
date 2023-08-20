import {UserInterface} from './user.interface';
import {WorkoutTime} from '../workout-time.type';

export interface CommonUserInterface extends UserInterface {
  workoutTime: WorkoutTime;
  dailyCalorieBurn: number;
  calorieBurnGoal: number;
  readyToTrain: boolean;
}
