import { Module } from '@nestjs/common';
import { UserResolver } from './resolver/user.resolver';
import { FetchUserService } from './service/fetch-user/fetch-user.service';
import { LoginUserService } from './service/login-user/login-user.service';
import { CreateUserService } from './service/create-user/create-user.service';
import { DeleteUserService } from './service/delete-user/delete-user.service';
import { UpdateUserService } from './service/update-user/update-user.service';

@Module({
  providers: [FetchUserService, UserResolver, LoginUserService, CreateUserService, DeleteUserService, UpdateUserService],
  exports: [],
})
export class UserModule {}
