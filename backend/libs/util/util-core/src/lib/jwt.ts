import {TokenPayloadInterface, UserInterface} from '@backend/shared/shared-types';

export function createJWTPayload(user: UserInterface): TokenPayloadInterface {
  return {
    sub: user._id,
    email: user.email,
    role: user.role,
    name: user.name,
  };
}
