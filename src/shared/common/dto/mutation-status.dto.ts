import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationStatus {
  @Field()
  status: boolean;

  @Field()
  error?: string;
}
