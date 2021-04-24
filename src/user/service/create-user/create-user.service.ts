import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MutationStatus } from '../../../shared/common/dto/mutation-status.dto';
import { EmailService } from '../../../shared/email/email/email.service';
import { CreateUserInputDto } from '../../dto/create-user-input.dto';
import { User } from '../../entity/user.entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly emailService: EmailService,
  ) {}

  private async checkExist(userSignupInput: CreateUserInputDto) {
    const { email, username } = userSignupInput;
    const IsEmailExist = await this.userRepository.findOne({ email });
    if (IsEmailExist) throw new Error('이미 등록된 email입니다.');
    const IsUsernameExist = await this.userRepository.findOne({ username });
    if (IsUsernameExist) throw new Error('이미 등록된 username입니다.');

    return userSignupInput;
  }

  // send email
  private async checkEmailVerification(userSignupInput: CreateUserInputDto) {
    const { email } = userSignupInput;
    try {
      // const isVerified: boolean = await this.emailService.sendEmail(email);
      // if (isVerified) {
      //   return userSignupInput;
      // }
      if (true) {
        return userSignupInput;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async join(
    userSignupInput: CreateUserInputDto,
  ): Promise<MutationStatus> {
    const { SALT_OR_ROUND } = process.env;
    const { email, password, username } = userSignupInput;
    const hash = await bcrypt.hash(password, SALT_OR_ROUND);

    try {
      const newUser = await this.userRepository.create({
        email,
        username,
        password: hash,
      });
      await this.userRepository.save(newUser);
      return {
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        error,
      };
    }
  }

  async verificateEmail(
    createUserInput: CreateUserInputDto,
  ): Promise<MutationStatus> {
    return Promise.resolve(
      this.checkExist(createUserInput) //
        .then(this.checkEmailVerification.bind(this))
        .then(this.join.bind(this)),
    );
  }
}
