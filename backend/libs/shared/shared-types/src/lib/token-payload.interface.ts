import {UserRole} from './users/user-role.enum';

export interface TokenPayloadInterface {
  sub: string;
  email: string;
  role: UserRole;
  name: string;
}
