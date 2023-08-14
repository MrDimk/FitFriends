import {TokenPayloadInterface} from '@backend/shared/shared-types';

export interface RefreshTokenPayloadInterface extends TokenPayloadInterface {
  tokenId: string;
}
