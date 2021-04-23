import { Column, Entity, ManyToMany } from 'typeorm';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';
import { Lecture } from '../../lecture/entity/lecture.entites';
import { Common } from '../../common/entity/common.entites';

@Entity()
export class User extends Common {
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsString()
  @Column()
  password: string;

  @IsString()
  @Column()
  username: string;

  @IsNumber()
  @Column({ default: 0 })
  point: number;

  @IsBoolean()
  @Column({ default: false })
  isInstructor: boolean;

  @ManyToMany(() => User, (lectures) => lectures.id)
  lectures: Lecture[];
}
