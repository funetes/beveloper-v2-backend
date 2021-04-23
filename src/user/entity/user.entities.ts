import { Column, Entity, ManyToMany } from 'typeorm';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { Lecture } from '../../lecture/entity/lecture.entites';
import { Common } from '../../common/entity/common.entites';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends Common {
  @IsEmail()
  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @IsString()
  @MinLength(8)
  @Column()
  @Field(() => String)
  password: string;

  @IsString()
  @Column({ nullable: false })
  @Field(() => String)
  username: string;

  @IsNumber()
  @Column({ default: 0 })
  @Field(() => Int, { defaultValue: 0 })
  point: number;

  @IsBoolean()
  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  isInstructor: boolean;

  @ManyToMany(() => Lecture, (lecture) => lecture.users)
  lectures: Lecture[];
}
