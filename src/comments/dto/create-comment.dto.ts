import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsInt({ message: 'A task_id deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A task_id é obrigatória.' })
  task_id: number;

  @IsString({ message: 'O comentário deve ser uma string.' })
  @IsNotEmpty({ message: 'O comentário é obrigatório.' })
  comment: string;

  @IsOptional()
  @IsInt({ message: 'O updated_by deve ser um número inteiro.' })
  updated_by?: number;
}
