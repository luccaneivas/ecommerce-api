import { ApiProperty } from '@nestjs/swagger';
import { Sales } from '@prisma/client';

export class SaleEntity implements Sales {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  createdAt: Date;
}
