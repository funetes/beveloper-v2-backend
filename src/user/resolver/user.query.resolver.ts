import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../entity/user.entities';
import { FetchUserService } from '../service/fetch-user/fetch-user.service';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly fetchUserService: FetchUserService) {}

  @Query(() => String)
  fetchUser(@Args('id') id: string) {
    return this.fetchUserService.fetchUser(id);
  }

  @Query(() => Boolean)
  loginUser() {
    return 'loginUser';
  }
}
