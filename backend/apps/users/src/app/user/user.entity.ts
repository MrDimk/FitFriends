import {
  CommonUserInterface,
  TrainerUserInterface,
  UserFitnessLevel,
  UserLocation,
  UserRole,
  WorkoutTime,
  WorkoutType
} from '@backend/shared/shared-types';
import {compare, genSalt, hash} from 'bcrypt';
import {SALT_ROUNDS} from './user.const';
import {UserGender} from '@backend/shared/shared-types';

export class UserEntity implements CommonUserInterface, TrainerUserInterface {
  public _id: string;
  public email: string;
  public fitnessLevel: UserFitnessLevel;
  public gender: UserGender;
  public location: UserLocation;
  public name: string;
  public description: string;
  public birthDate: Date;
  public passwordHash: string;
  public role: UserRole;
  public workoutTypes: WorkoutType[];
  public avatarImage: string;
  public pageImage: string;

  public workoutTime: WorkoutTime;
  public dailyCalorieBurn: number;
  public calorieBurnGoal: number;
  public readyToTrain: boolean;

  public certificates: string[];  // path to the pdf-file
  public achievements: string;
  public readyForPersonalTraining: boolean;

  constructor(user: CommonUserInterface | TrainerUserInterface) {
    this.fillEntity(user);
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  private isCommonUser(user: CommonUserInterface | TrainerUserInterface): user is CommonUserInterface {
    return user.role === UserRole.User;
  }

  private isTrainerUser(user: CommonUserInterface | TrainerUserInterface): user is TrainerUserInterface {
    return user.role === UserRole.Trainer;
  }

  public fillEntity(user: CommonUserInterface | TrainerUserInterface) {
    this._id = user._id;
    this.email = user.email;
    this.gender = user.gender;
    this.location = user.location;
    this.name = user.name;
    this.description = user.description;
    this.birthDate = user.birthDate;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
    this.avatarImage = user.avatarImage
    this.pageImage = user.pageImage;
    this.fitnessLevel = user.fitnessLevel;
    this.workoutTypes = user.workoutTypes;
    if (this.isCommonUser(user)) {
      this.workoutTime = user.workoutTime;
      this.dailyCalorieBurn = user.dailyCalorieBurn;
      this.calorieBurnGoal = user.calorieBurnGoal;
      this.readyToTrain = user.readyToTrain;
    } else if (this.isTrainerUser(user)) {
      this.certificates = user.certificates;
      this.achievements = user.achievements;
      this.readyForPersonalTraining = user.readyForPersonalTraining;
    }
  }
}
