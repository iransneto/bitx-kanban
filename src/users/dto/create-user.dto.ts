import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password level is required' })
  password: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  salt: string;

  @IsNotEmpty()
  role_id: number;
}
