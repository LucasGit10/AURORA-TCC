import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsEmail({}, { message: 'Por favor, informe um email válido.' })
  @IsNotEmpty({ message: 'O email não pode estar vazio.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  password: string;
}