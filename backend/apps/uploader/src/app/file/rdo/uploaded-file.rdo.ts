import { Expose, Transform } from 'class-transformer';

export class UploadedFileRdo {
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public originalName: string;

  @Expose()
  public mimetype: string;

  @Expose()
  public path: string;

  @Expose()
  public hashName: string;

  @Expose()
  public size: number;
}
