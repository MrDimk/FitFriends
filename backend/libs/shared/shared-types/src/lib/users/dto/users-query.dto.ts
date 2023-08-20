import {IsEnum, IsInt, IsOptional, IsString} from 'class-validator';
import {UserRole} from '../user-role.enum';

export class UsersQueryDto {
  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  workoutTypes?: string;

  @IsOptional()
  @IsString()
  fitnessLevel?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsInt()
  limit?: number;

  @IsOptional()
  @IsInt()
  page?: number;
}
