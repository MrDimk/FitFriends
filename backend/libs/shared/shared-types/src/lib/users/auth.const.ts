export const AUTH_USER_EXISTS = 'User with this email exists';
export const INVALID_USER_ROLE = 'User role is invalid';
export const AUTH_USER_NOT_FOUND = 'User not found';
export const USERS_NOT_FOUND = 'Users not found';
export const AUTH_USER_PASSWORD_WRONG = 'User password is wrong';
export const USERS_LIST_LIMIT = 50;


export const USER_FIELDS = {
  UserNameMin: 1,
  UserNameMax: 15,
  UserInfoMin: 10,
  UserInfoMax: 140,
  PasswordMin: 6,
  PasswordMax: 12,
};

export const SPECIALIZATIONS_LIMIT = 5;

export const USER_EXCEPTIONS = {
  UserForbidden: 'Access is denied.',
  UserEmailExist: 'User with this email exists.',
  UserNotFound: 'User not found.',
  UserPasswordWrong: 'User password is wrong.'
};

export const USER_VALIDATION_ERRORS = {
  UserEmailNotValid: 'The email is not valid.',
  UserDateBirthNotValid: 'The user date birth is not valid.',
  UserNameLength: `User name length shall be between ${USER_FIELDS.UserNameMin} and ${USER_FIELDS.UserNameMax} chars.`,
  UserPasswordLength: `User password length shall be between ${USER_FIELDS.PasswordMin} and ${USER_FIELDS.PasswordMax} chars.`,
  UserInfoLength: `About User info length must no more than ${USER_FIELDS.UserInfoMax} chars.`,
};

