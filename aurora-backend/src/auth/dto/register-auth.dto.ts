import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  @IsEmail({}, { message: 'Por favor, informe um email válido.' })
  @IsNotEmpty({ message: 'O email não pode estar vazio.' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;
}
