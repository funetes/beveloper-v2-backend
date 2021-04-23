import { Module } from '@nestjs/common';
import { FilemanagerResolver } from './resolver/filemanager.resolver';

@Module({
  providers: [FilemanagerResolver],
})
export class FilemanagerModule {}
