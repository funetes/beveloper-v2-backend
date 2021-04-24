import { Injectable } from '@nestjs/common';

@Injectable()
export class FetchUserService {
  fetchUser(id: string) {
    return id;
  }
}
