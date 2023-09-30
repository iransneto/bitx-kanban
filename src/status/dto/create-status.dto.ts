import { IsNotEmpty } from 'class-validator';

export class CreateStatusDto {
  @IsNotEmpty({ message: 'Type is required' })
  type: string;

  @IsNotEmpty({ message: 'Priority level is required' })
  priority_level: number;
}
