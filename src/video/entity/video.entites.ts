import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Comment } from '../../comment/entity/comment.entites';
import { Common } from '../../common/entity/common.entites';
import { FileManager } from '../../filemanager/entity/fileManager.entites';
import { Lecture } from '../../lecture/entity/lecture.entites';

@Entity()
export class Video extends Common {
  @Column()
  caption: string;

  @Column()
  description: string;

  @OneToMany(() => Comment, (comment) => comment.video)
  comments: Comment[];

  @ManyToOne(() => Lecture, (lecture) => lecture.videos)
  lecture: Lecture;

  @OneToOne(() => FileManager)
  @JoinColumn()
  videoFile: FileManager;
}
