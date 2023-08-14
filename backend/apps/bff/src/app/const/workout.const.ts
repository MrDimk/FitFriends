import {WorkoutsSortType} from '@backend/shared/shared-types';

export const WORKOUT_FIELDS = {
  TitleMin: 1,
  TitleMax: 15,
  DescriptionMin: 10,
  DescriptionMax: 140,
  CaloriesMin: 1000,
  CaloriesMax: 5000,
  RatingMin: 0,
  RatingMax: 5,
};

export const WORKOUTS_LIST_LIMIT = 50;
export const WORKOUT_TYPES_LIMIT = 3;
export const DEFAULT_SORT_DIRECTION = 'asc';
export const DEFAULT_SORT_TYPE = WorkoutsSortType.CreatedAt;

export const WORKOUT_EXCEPTIONS = {
  WorkoutNotFound: 'Workout not found.',
  RoleAccessDenied: 'User role is not permitted to perform this action'
};

export const WORKOUT_VALIDATION_ERRORS = {
  TitleLength: `Title must be string type ${WORKOUT_FIELDS.TitleMin} to ${WORKOUT_FIELDS.TitleMax} chars long.`,
  DescriptionLength: `Workout description must be string type ${WORKOUT_FIELDS.DescriptionMin} to ${WORKOUT_FIELDS.DescriptionMax} chars long.`,
  Calories: `Calories must be an Integer value from ${WORKOUT_FIELDS.CaloriesMin} to ${WORKOUT_FIELDS.CaloriesMax}`,
  Rating: `Rating must be an Integer value from ${WORKOUT_FIELDS.RatingMin} to ${WORKOUT_FIELDS.RatingMax}`,
  SpecialOfferBoolean: `SpecialOffer must be a boolean type.`,
};
