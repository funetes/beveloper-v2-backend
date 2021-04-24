import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../user/entity/user.entities';
import { EmailService } from './email/email.service';

@Module({
  providers: [EmailService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [EmailService],
})
export class EmailModule {}
