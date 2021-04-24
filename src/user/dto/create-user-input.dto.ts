import { InputType, PickType } from '@nestjs/graphql';
import { User } from '../entity/user.entities';

@InputType()
export class CreateUserInputDto extends PickType(
  User,
  ['email', 'password', 'username'],
  InputType,
) {}
