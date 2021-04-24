import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Comment } from '../../comment/entity/comment.entites';
import { Common } from '../../shared/common/entity/common.entites';
import { User } from '../../user/entity/user.entities';

@Entity()
export class Board extends Common {
  @IsString()
  @Column()
  @Field(() => String)
  title: string;

  @IsString()
  @Column()
  @Field(() => String)
  content: string;

  @OneToOne(() => User)
  @JoinColumn()
  creator: User;

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[];
}
