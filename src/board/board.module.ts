import { Module } from '@nestjs/common';
import { BoardResolver } from './resolver/board.resolver';
import { CreateBoardService } from './service/create-board/create-board.service';
import { UpdateBoardService } from './service/update-board/update-board.service';
import { DeleteBoardService } from './service/delete-board/delete-board.service';
import { FetchBoardService } from './service/fetch-board/fetch-board.service';

@Module({
  providers: [
    BoardResolver,
    CreateBoardService,
    UpdateBoardService,
    DeleteBoardService,
    FetchBoardService,
  ],
})
export class BoardModule {}
