import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, CustomersController],
  providers: [AppService],
})
export class AppModule {}
