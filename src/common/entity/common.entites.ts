import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Common {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => GraphQLISODateTime)
  deletedAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
