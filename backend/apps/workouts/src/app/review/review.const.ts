export const DEFAULT_REVIEW = {
  UserIdMinLength: 1,
  UserIdMaxLength: 24,
  RatingMin: 1,
  RatingMax: 5,
  TextMinLength: 100,
  TextMaxLength: 1024,
};

export const REVIEW_VALIDATION_ERROR = {
  UserIdLength: 'User ID should have a length between 1 and 24 characters',
  Rating: 'Rating should be a number between 1 and 5',
  TextLength: 'Review text should be between 100 and 1024 characters long',
};
