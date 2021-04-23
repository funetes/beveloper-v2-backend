import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VideoModule } from './video/video.module';
import { LectureModule } from './lecture/lecture.module';
import { FilemanagerModule } from './filemanager/filemanager.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entity/user.entities';
import { Lecture } from './lecture/entity/lecture.entites';
import { Board } from './board/entity/board.entites';
import { Comment } from './comment/entity/comment.entites';
import { Video } from './video/entity/video.entites';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres_container',
      // host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Lecture, Board, Comment, Video],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    VideoModule,
    LectureModule,
    FilemanagerModule,
    CommentModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
