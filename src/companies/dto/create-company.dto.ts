import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(42)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(14)
  @ApiProperty()
  cnpj: string;
}
