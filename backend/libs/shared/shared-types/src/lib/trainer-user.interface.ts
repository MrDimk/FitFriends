import {UserInterface} from './user.interface';
import {UserFitnessLevel} from './user-fitness-level.enum';
import {WorkoutType} from './workout-type.enum';

export interface TrainerUserInterface extends UserInterface {
  fitnessLevel: UserFitnessLevel;
  workoutTypes: WorkoutType[];
  certificates: string[];
  achievements: string;
  readyForPersonalTraining: boolean;
}
