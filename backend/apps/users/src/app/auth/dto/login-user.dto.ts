import {ApiProperty} from '@nestjs/swagger';

export class LoginUserDto {

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: 'qwerty12345'
  })
  public password: string;
}
