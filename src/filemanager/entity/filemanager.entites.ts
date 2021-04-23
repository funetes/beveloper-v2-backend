import { IsNumber, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Common } from '../../common/entity/common.entites';

@Entity()
export class FileManager extends Common {
  @IsString()
  @Column()
  url: string;

  @IsString()
  @Column()
  type: string;

  @IsNumber()
  @Column()
  filesize: number;
}
