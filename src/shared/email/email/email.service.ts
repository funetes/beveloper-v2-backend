import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendEmail(email: string) {
    console.log('send email', email);
    return true;
  }
}
