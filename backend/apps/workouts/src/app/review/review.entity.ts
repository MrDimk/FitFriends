import {ReviewInterface} from '@backend/shared/shared-types';

export class ReviewEntity implements ReviewInterface {
  public id: number;
  public userId: string;
  public workoutId: number;
  public rating: number;
  public text: string;
  public createdAt: Date;

  constructor(review: ReviewInterface) {
    this.fillEntity(review);
  }

  public fillEntity(review: ReviewInterface) {
    this.id = review.id;
    this.userId = review.userId;
    this.workoutId = review.workoutId;
    this.rating = review.rating;
    this.text = review.text;
    this.createdAt = review.createdAt;
  }

  public toObject(): ReviewEntity {
    return {...this};
  }
}
