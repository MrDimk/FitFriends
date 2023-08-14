import { IsEmail, IsNotEmpty } from 'class-validator';
import {EMAIL_NOT_VALID, NAME_IS_EMPTY, TRAINER_ID_IS_EMPTY,} from '../email-subscriber.constant';

export class DeleteSubscriberDto {
  @IsEmail({}, { message: EMAIL_NOT_VALID })
  public email: string;

  @IsNotEmpty({ message: NAME_IS_EMPTY })
  public name: string;

  @IsNotEmpty({message: TRAINER_ID_IS_EMPTY})
  public trainerId: string;
}
