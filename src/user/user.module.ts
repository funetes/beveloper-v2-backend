import { Module } from '@nestjs/common';
import { FetchUserService } from './service/fetch-user/fetch-user.service';
import { LoginUserService } from './service/login-user/login-user.service';
import { CreateUserService } from './service/create-user/create-user.service';
import { DeleteUserService } from './service/delete-user/delete-user.service';
import { UpdateUserService } from './service/update-user/update-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entities';
import { UserMutationResolver } from './resolver/user.mutation.resolver';
import { UserQueryResolver } from './resolver/user.query.resolver';
import { EmailModule } from '../shared/email/email.module';

@Module({
  providers: [
    FetchUserService,
    UserMutationResolver,
    UserQueryResolver,
    LoginUserService,
    CreateUserService,
    DeleteUserService,
    UpdateUserService,
  ],
  exports: [],
  imports: [TypeOrmModule.forFeature([User]), EmailModule],
})
export class UserModule {}
