import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {FileInterface} from '@backend/shared/shared-types';

@Schema({
  collection: 'files',
  timestamps: true
})
export class FileModel extends Document implements FileInterface {
  @Prop({
    required: true,
  })
  public originalName: string;

  @Prop({
    required: true
  })
  public hashName: string;

  @Prop({
    required: true,
  })
  public mimetype: string;

  @Prop({
    required: true,
  })
  public path: string;

  @Prop({
    required: true,
  })
  public size: number;
}

export const FileSchema = SchemaFactory.createForClass(FileModel);
