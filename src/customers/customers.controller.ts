import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('profile')
  getProfile(): string {
    return 'get profile';
  }
}
