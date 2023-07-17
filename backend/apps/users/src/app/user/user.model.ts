import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CommonUserInterface,
  TrainerUserInterface,
  UserLocation, UserRole
} from '@backend/shared/shared-types';
import {Gender, UserFitnessLevel, WorkoutTime, WorkoutType} from '@prisma/client';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements CommonUserInterface, TrainerUserInterface {
  @Prop()
  public email: string;

  @Prop({
    required: true,
    type: String,
    enum: UserFitnessLevel
  })
  public fitnessLevel: UserFitnessLevel;

  @Prop({
    required: true,
    type: String,
    enum: Gender
  })
  public gender: Gender;

  @Prop({
    required: true,
    type: String,
    enum: UserLocation
  })
  public location: UserLocation;

  @Prop()
  public name: string;

  @Prop()
  public description: string;

  @Prop()
  public birthDate: Date;

  @Prop()
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole
  })
  public role: UserRole;

  @Prop({
    required: true,
    type: [String],
    enum: WorkoutType,
  })
  public workoutTypes: WorkoutType[];

  @Prop()
  public avatarImage: string;

  @Prop()
  public pageImage: string;


  @Prop({
    type: String,
    enum: WorkoutTime
  })
  public workoutTime: WorkoutTime;

  @Prop()
  public dailyCalorieBurn: number;

  @Prop()
  public calorieBurnGoal: number;

  @Prop()
  public readyToTrain: boolean;


  @Prop({
    type: [String]
  })
  public certificates: string[];

  @Prop()
  public achievements: string;

  @Prop()
  public readyForPersonalTraining: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
