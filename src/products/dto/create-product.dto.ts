import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(200)
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  value: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  currency: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ default: false })
  available: boolean;
}
