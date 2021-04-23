import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Board } from '../../board/entity/board.entites';
import { Common } from '../../common/entity/common.entites';
import { Video } from '../../video/entity/video.entites';

@Entity()
export class Comment extends Common {
  @IsString()
  @Column()
  @Field(() => String)
  username: string;

  @IsString()
  @Column()
  @Field(() => String)
  content: string;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;

  @ManyToOne(() => Video, (video) => video.comments)
  video: Video;
}
