import { Module } from '@nestjs/common';
import { CommentResolver } from './resolver/comment.resolver';
import { CreateCommentService } from './service/create-comment/create-comment.service';
import { UpdateCommentService } from './service/update-comment/update-comment.service';
import { DeleteCommentService } from './service/delete-comment/delete-comment.service';
import { FetchCommentService } from './service/fetch-comment/fetch-comment.service';

@Module({
  providers: [
    CommentResolver,
    CreateCommentService,
    UpdateCommentService,
    DeleteCommentService,
    FetchCommentService,
  ],
})
export class CommentModule {}
