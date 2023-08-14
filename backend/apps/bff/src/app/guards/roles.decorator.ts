import {SetMetadata} from '@nestjs/common';
import {UserRole} from '@backend/shared/shared-types';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
