import {Expose, Transform} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class LoggedUserRdo {
  @Expose({name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Hulk'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'JWT token',
    example: 'token'
  })
  @Expose()
  public accessToken: string;
}
