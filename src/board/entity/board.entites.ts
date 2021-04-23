import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Comment } from '../../comment/entity/comment.entites';
import { Common } from '../../common/entity/common.entites';
import { User } from '../../user/entity/user.entities';

@Entity()
export class Board extends Common {
  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column()
  content: string;

  @OneToOne(() => User)
  @JoinColumn()
  creator: User;

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[];
}
