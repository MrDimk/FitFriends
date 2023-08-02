import { IsString, Length, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DEFAULT_REVIEW, REVIEW_VALIDATION_ERROR } from '../review.const';

export class CreateReviewDto {
  @ApiProperty({
    description: 'User ID',
    example: '60af5c4134958c7cee6de123'
  })
  @IsString({ message: REVIEW_VALIDATION_ERROR.UserIdLength})
  @Length(DEFAULT_REVIEW.UserIdMinLength, DEFAULT_REVIEW.UserIdMaxLength, { message: REVIEW_VALIDATION_ERROR.UserIdLength })
  public userId: string;

  @ApiProperty({
    description: 'Workout ID',
    example: 1
  })
  @IsNumber()
  public workoutId: number;

  @ApiProperty({
    description: 'Review rating',
    example: 5
  })
  @IsNumber({}, { message: REVIEW_VALIDATION_ERROR.Rating })
  @Min(DEFAULT_REVIEW.RatingMin, { message: REVIEW_VALIDATION_ERROR.Rating })
  @Max(DEFAULT_REVIEW.RatingMax, { message: REVIEW_VALIDATION_ERROR.Rating })
  public rating: number;

  @ApiProperty({
    description: 'Review text',
    example: 'Great workout session!'
  })
  @IsString({ message: REVIEW_VALIDATION_ERROR.TextLength})
  @Length(DEFAULT_REVIEW.TextMinLength, DEFAULT_REVIEW.TextMaxLength, { message: REVIEW_VALIDATION_ERROR.TextLength })
  public text: string;
}
