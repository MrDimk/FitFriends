import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import {ServeStaticModule} from '@nestjs/serve-static';
import {ConfigService} from '@nestjs/config';
import {FileRepository} from './file.repository';
import {FileModel, FileSchema} from './file.model';
import {MongooseModule} from '@nestjs/mongoose';

// const SERVE_ROOT = '/static';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const rootPath = configService.get<string>('application.uploadDirectory');
        const serveRoot = configService.get<string>('application.serveRoot');
        return [{
          rootPath,
          serveRoot,
          serveStaticOptions: {
            fallthrough: true,
            etag: true,
          }
        }]
      }
    }),
    MongooseModule.forFeature([
      { name: FileModel.name, schema: FileSchema }
    ])
  ],
  providers: [FileService, FileRepository],
  controllers: [FileController]
})
export class FileModule {}
