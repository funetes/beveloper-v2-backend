import { Test, TestingModule } from '@nestjs/testing';
import { UpdateVideoService } from './update-video.service';

describe('UpdateVideoService', () => {
  let service: UpdateVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateVideoService],
    }).compile();

    service = module.get<UpdateVideoService>(UpdateVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
