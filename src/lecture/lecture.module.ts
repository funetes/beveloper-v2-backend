import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureResolver } from './lecture.resolver';

@Module({
  providers: [LectureService, LectureResolver]
})
export class LectureModule {}
