import { Module } from '@nestjs/common';
import { CreateLectureService } from './service/create-lecture/create-lecture.service';
import { UpdateLectureService } from './service/update-lecture/update-lecture.service';
import { DeleteLectureService } from './service/delete-lecture/delete-lecture.service';
import { FetchLectureService } from './service/fetch-lecture/fetch-lecture.service';
import { LectureResolver } from './resolver/lecture.resolver';

@Module({
  providers: [
    LectureResolver,
    CreateLectureService,
    UpdateLectureService,
    DeleteLectureService,
    FetchLectureService,
  ],
})
export class LectureModule {}
