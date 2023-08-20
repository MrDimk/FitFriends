import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, Length} from 'class-validator';
import {USER_FIELDS, USER_VALIDATION_ERRORS} from '../../../../../../libs/shared/shared-types/src/lib/users/auth.const';

export class LoginUserDto {

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: USER_VALIDATION_ERRORS.UserEmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: 'qwerty12345'
  })
  @IsString()
  @Length(USER_FIELDS.PasswordMin, USER_FIELDS.PasswordMax, { message: USER_VALIDATION_ERRORS.UserPasswordLength })
  public password: string;
}
