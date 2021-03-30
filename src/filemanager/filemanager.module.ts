import { Module } from '@nestjs/common';
import { FilemanagerService } from './filemanager.service';
import { FilemanagerResolver } from './filemanager.resolver';

@Module({
  providers: [FilemanagerService, FilemanagerResolver],
})
export class FilemanagerModule {}
