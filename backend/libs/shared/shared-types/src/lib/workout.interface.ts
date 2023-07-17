import { UserFitnessLevel } from './user-fitness-level.enum';
import { UserGender } from './user-gender.type';
import { WorkoutTime } from './workout-time.type';
import { WorkoutType } from './workout-type.type';

export interface WorkoutInterface {
  workoutId?: number;
  title: string; //  длина 1 - 15 символов
  backgroundImage: string;  // обязательное поле; изображение в формате jpg/png
  level: UserFitnessLevel;
  type: WorkoutType;
  duration: WorkoutTime;
  price: number;  // целые числа; число больше или равно 0
  calories: number; // обязательное поле;  значение 1000-5000; только целые числа
  description: string; // обязательное, 10 - 140 символов
  targetGender: UserGender;
  video: string;  // обязательное поле; только одно видео; формат видео mov/avi/mp4
  rating: number;   // рейтинг тренировки, по умолчанию значение 0
  trainerId: string;
  specialOffer: boolean;
}
