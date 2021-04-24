import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MutationStatus } from '../../shared/common/dto/mutation-status.dto';
import { CreateUserInputDto } from '../dto/create-user-input.dto';
import { User } from '../entity/user.entities';
import { CreateUserService } from '../service/create-user/create-user.service';

@Resolver(() => User)
export class UserMutationResolver {
  constructor(private readonly createUserService: CreateUserService) {}

  @Mutation(() => MutationStatus)
  verificateEmail(
    @Args('createUserInput') createUserInput: CreateUserInputDto,
  ): Promise<MutationStatus> {
    return this.createUserService.verificateEmail(createUserInput);
  }
}
