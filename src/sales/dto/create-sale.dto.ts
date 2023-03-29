import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  quantity: number;
}
