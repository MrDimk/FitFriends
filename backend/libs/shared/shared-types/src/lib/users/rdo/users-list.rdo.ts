import {ApiProperty, getSchemaPath} from '@nestjs/swagger';
import {TrainerUserRdo} from '../rdo/trainer-user.rdo';
import {CommonUserRdo} from '../rdo/common-user.rdo';

export class UsersListRdo {
  @ApiProperty({
    description: 'Array of users',
    isArray: true,
    oneOf: [
      { $ref: getSchemaPath(CommonUserRdo) },
      { $ref: getSchemaPath(TrainerUserRdo) },
    ]
  })
  public users: (TrainerUserRdo | CommonUserRdo)[];

  @ApiProperty({ description: 'Total count of users' })
  public totalCount: number;

  @ApiProperty({ description: 'Current page number' })
  public page: number;

  @ApiProperty({ description: 'Limit of users per page' })
  public limit: number;
}
