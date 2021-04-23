import { IsNumber, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Common } from '../../common/entity/common.entites';
import { FileManager } from '../../filemanager/entity/fileManager.entites';
import { User } from '../../user/entity/user.entities';
import { Video } from '../../video/entity/video.entites';

@Entity()
export class Lecture extends Common {
  @IsString()
  @Column()
  title: string;

  @IsNumber()
  @Column({ default: 0 })
  price: number;

  @IsString()
  @Column()
  description: string;

  @OneToOne(() => User)
  @JoinColumn()
  instructor: User;

  @OneToOne(() => FileManager)
  @JoinColumn()
  thumbnail: FileManager;

  @ManyToMany(() => User, (users) => users.id)
  users: User[];

  @OneToMany(() => Video, (video) => video.lecture)
  videos: Video[];
}
