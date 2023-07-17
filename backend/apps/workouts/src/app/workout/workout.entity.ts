import {EntityInterface} from '@backend/util/util-types';
import {UserFitnessLevel, UserGender, WorkoutInterface, WorkoutTime, WorkoutType} from '@backend/shared/shared-types';

export class WorkoutEntity implements EntityInterface<WorkoutEntity>, WorkoutInterface {
  public id: number;
  public title: string;
  public backgroundImage: string;
  public level: UserFitnessLevel;
  public type: WorkoutType;
  public duration: WorkoutTime;
  public price: number;  // целые числа; число больше или равно 0
  public calories: number; // обязательное поле;  значение 1000-5000; только целые числа
  public description: string; // обязательное, 10 - 140 символов
  public targetGender: UserGender;
  public video: string;  // обязательное поле; только одно видео; формат видео mov/avi/mp4
  public rating: number;   // рейтинг тренировки, по умолчанию значение 0
  public trainerId: string;
  public specialOffer: boolean;

  constructor(workout: WorkoutInterface) {
    this.fillEntity(workout);
  }

  public fillEntity(workout: WorkoutInterface) {
  this.title = workout.title;
  this.backgroundImage = workout.backgroundImage;
  this.level = workout.level;
  this.type = workout.type;
  this.duration = workout.duration;
  this.price = workout.price;
  this.calories = workout.calories;
  this.description = workout.description;
  this.targetGender = workout.targetGender;
  this.video = workout.video;
  this.rating = workout.rating;
  this.trainerId = workout.trainerId;
  this.specialOffer = workout.specialOffer;
  }

  public toObject(): WorkoutEntity {
    return {...this};
  }
}
