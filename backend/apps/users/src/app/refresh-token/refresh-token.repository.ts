import {InjectModel} from '@nestjs/mongoose';
import {TokenInterface} from '@backend/shared/shared-types';
import {Model} from 'mongoose';
import {RefreshTokenModel} from './refresh-tolen.model';
import {RefreshTokenEntity} from './refresh-token.entity';

export class RefreshTokenRepository {
  constructor(
    @InjectModel(RefreshTokenModel.name) private readonly refreshTokenModel: Model<RefreshTokenModel>) {
  }

  public async create(item: RefreshTokenEntity): Promise<TokenInterface> {
    return new this.refreshTokenModel(item).save();
  }

  public async deleteByTokenId(tokenId: string) {
    return this.refreshTokenModel
      .deleteOne({ tokenId })
      .exec();
  }

  public async findByTokenId(tokenId: string): Promise<TokenInterface | null> {
    return this.refreshTokenModel
      .findOne({ tokenId })
      .exec();
  }

  public async deleteExpiredTokens() {
    return this.refreshTokenModel
      .deleteMany({ expiresIn: { $lt: new Date()}})
  }

  public async deleteTokenByUserId(userId: string) {
    return this.refreshTokenModel
      .deleteMany({ userId })
      .exec();
  }
}
