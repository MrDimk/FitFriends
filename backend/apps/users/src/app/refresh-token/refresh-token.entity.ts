import {TokenInterface} from '@backend/shared/shared-types';
import {EntityInterface} from '@backend/util/util-types';

export class RefreshTokenEntity implements EntityInterface<RefreshTokenEntity>, TokenInterface {
  public createdAt: Date;
  public expiresIn: Date;
  public id: string;
  public tokenId: string;
  public userId: string;
  [key: string]: unknown;

  constructor(refreshToken: TokenInterface) {
    this.createdAt = new Date;
    this.fillEntity(refreshToken);
  }

  public fillEntity(entity: TokenInterface): void {
    this.userId = entity.userId;
    this.id = entity.id;
    this.tokenId = entity.tokenId;
    this.createdAt = entity.createdAt;
    this.expiresIn = entity.expiresIn;
  }

  public toObject(): RefreshTokenEntity {
    return { ...this };
  }

}
