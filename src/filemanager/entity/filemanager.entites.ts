import { Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Common } from '../../shared/common/entity/common.entites';

@Entity()
export class FileManager extends Common {
  @IsString()
  @Column()
  @Field(() => String)
  url: string;

  @IsString()
  @Column({ nullable: false })
  @Field(() => String)
  type: string;

  @IsNumber()
  @Column({ nullable: false })
  @Field(() => Int)
  filesize: number;
}
