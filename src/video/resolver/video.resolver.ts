import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class VideoResolver {
  @Query((type) => String)
  video() {
    return 'hello!';
  }
}
