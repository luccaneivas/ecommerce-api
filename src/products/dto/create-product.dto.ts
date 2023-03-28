import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  company: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty({ default: true })
  available: boolean;
}
