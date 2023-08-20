import {UserRole} from './user-role.enum';
import {UserLocation} from './user-location.enum';
import {UserFitnessLevel} from './user-fitness-level.enum';
import {WorkoutType} from '../workout-type.type';
import {UserGender} from './user-gender.type';

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  description?: string;
  gender: UserGender;
  birthDate?: Date;
  role: UserRole;
  location: UserLocation;
  passwordHash: string;
  avatarImage?: string;
  pageImage?: string;
  fitnessLevel: UserFitnessLevel;
  workoutTypes: WorkoutType[];
}
