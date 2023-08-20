import {TokenPayloadInterface} from '../token-payload.interface';

export interface RequestWithTokenPayload {
  user?: TokenPayloadInterface;
}
