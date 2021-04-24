import { Module } from '@nestjs/common';
import { VideoResolver } from './resolver/video.resolver';
import { CreateVideoService } from './service/create-video/create-video.service';
import { UpdateVideoService } from './service/update-video/update-video.service';
import { DeleteVideoService } from './service/delete-video/delete-video.service';
import { FetchVideoService } from './service/fetch-video/fetch-video.service';

@Module({
  providers: [
    VideoResolver,
    CreateVideoService,
    UpdateVideoService,
    DeleteVideoService,
    FetchVideoService,
  ],
})
export class VideoModule {}
