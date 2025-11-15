import { IsString, MinLength } from 'class-validator';

export class SearchQueryDto {
  @IsString()
  @MinLength(3, {
    message: 'O parâmetro de busca [q] deve ter pelo menos 3 caracteres.',
  })
  q: string;
}