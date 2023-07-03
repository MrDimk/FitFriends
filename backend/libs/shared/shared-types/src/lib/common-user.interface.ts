import {UserInterface} from './user.interface';
import {WorkoutTime} from './workout-time.enum';

export interface CommonUserInterface extends UserInterface {
  workoutTime: WorkoutTime;
  dailyCalorieBurn: number;
  calorieBurnGoal: number;
  readyToTrain: boolean;
}
