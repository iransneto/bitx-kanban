import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'O título deve ser uma string.' })
  title: string;

  @IsOptional()
  @IsBoolean({ message: 'O campo is_public deve ser um booleano.' })
  is_public?: boolean = true;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  description?: string;

  @IsOptional()
  @IsInt({ message: 'O status_id deve ser um número inteiro.' })
  status_id?: number;

  @IsOptional()
  @IsDate({ message: 'A data de término deve ser uma data válida.' })
  end_at?: Date;

  @IsOptional()
  @IsInt({ message: 'O priority_level deve ser um número inteiro.' })
  priority_level?: number;
}
