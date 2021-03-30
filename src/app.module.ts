import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VideoModule } from './video/video.module';
import { LectureModule } from './lecture/lecture.module';
import { FilemanagerModule } from './filemanager/filemanager.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    VideoModule,
    LectureModule,
    FilemanagerModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
