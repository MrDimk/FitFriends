import {FileInterface} from '@backend/shared/shared-types';
import {EntityInterface} from '@backend/util/util-types';

export class FileEntity implements EntityInterface<FileEntity>, FileInterface {
  public id: string;
  public hashName: string;
  public mimetype: string;
  public originalName: string;
  public path: string;
  public size: number;

  constructor(file: FileInterface) {
    this.fillEntity(file);
  }

  public fillEntity(entity) {
    this.id = entity.id;
    this.hashName = entity.hashName;
    this.mimetype = entity.mimetype;
    this.originalName = entity.originalName;
    this.path = entity.path;
    this.size = entity.size;
  }

  public toObject(): FileEntity {
    return {
      ...this,
    }
  }
}
