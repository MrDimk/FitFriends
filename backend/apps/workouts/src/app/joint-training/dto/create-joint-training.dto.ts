import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateJointTrainingDto {
  @IsNotEmpty()
  @IsString()
  initiatorId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
