import {UserLocation, UserRole} from '@backend/shared/shared-types';
import {
  getEnumValues,
  getRandomDateIn,
  getRandomElement,
  getRandomElements,
  getRandomInt
} from '@backend/util/util-core';
import {Gender, WorkoutTime} from '@prisma/client';
import {BadRequestException} from '@nestjs/common';
import {CreateUserDto} from '../dto/create-user.dto';

const NAMES = [
  "Alex",
  "Bella",
  "Charlie",
  "Diana",
  "Edward",
  "Fiona",
  "George",
  "Hannah",
  "Ivan",
  "Jenna"
];

const DESCRIPTIONS = [
  "Fitness enthusiast",
  "Marathon runner",
  "Yoga instructor",
  "Certified nutritionist",
  "Gym junkie",
  "Outdoor adventure lover",
  "Crossfit master",
  "Aerobics trainer",
  "Boxing coach",
  "Dance instructor"
];

const ACHIEVEMENTS = [
  "Completed a marathon under 3 hours",
  "Climbed Mount Everest",
  "Held a plank for 10 minutes straight",
  "Won a regional Crossfit competition",
  "Swam across the English Channel",
  "Set a state record in bench press",
  "Completed a triathlon",
  "Performed 1000 push-ups in a row",
  "Held a yoga pose for 1 hour",
  "Won a national boxing championship"
];

const WORKOUT_TYPES = [
  'yoga',
  'running',
  'boxing',
  'stretching',
  'crossfit',
  'aerobics',
  'pilates'
];

const genders = getEnumValues(Gender);
const locations = getEnumValues(UserLocation);
const levels = ['beginner', 'intermediate', 'professional'];
const workoutTimes = getEnumValues(WorkoutTime);

export const getMockUser = (role: UserRole): CreateUserDto => {
  const uniqString = getRandomInt(9999).toString();
  const newUser = {
    name: getRandomElement(NAMES),
    email: `user${uniqString}@fit-friends.ru`,
    description: getRandomElement(DESCRIPTIONS),
    gender: getRandomElement(genders),
    birthDate: getRandomDateIn(2023 - 60, 2023 - 18),
    role: UserRole.Trainer,
    location: getRandomElement(locations),
    password: 'test',
    avatarImage: `/images/avatar-${uniqString}.png`,
    pageImage: `/images/page-img-${uniqString}.png`,
    fitnessLevel: getRandomElement(levels),
    workoutTypes: getRandomElements(WORKOUT_TYPES, getRandomInt(3))
  }

  let result;

  if (role === UserRole.Trainer) {
    result = {
      ...newUser,
      certificates: [`/images/avatar-${uniqString}-1.pdf`, `/images/avatar-${uniqString}-2.pdf`],  // path to the pdf-file
      achievements: getRandomElement(ACHIEVEMENTS),
      readyForPersonalTraining: !!Math.round(Math.random())
    }
  } else if (role === UserRole.User) {
    result = {
      ...newUser,
      workoutTime: getRandomElement(workoutTimes),
      dailyCalorieBurn: getRandomInt(1000),
      calorieBurnGoal: (getRandomInt(4000) + 1000),
      readyToTrain: !!Math.round(Math.random())
    };
  } else {
    throw new BadRequestException('Unexpected user role');
  }
  return result;
}
