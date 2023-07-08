import {UserRole} from './user-role.enum';

export interface TokenPayloadInterface {
  sub: string;
  email: string;
  role: UserRole;
  name: string;
}
