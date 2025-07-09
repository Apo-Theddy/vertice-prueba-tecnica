import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDetailDTO {
  @ApiProperty({ example: 5, description: 'Product ID' })
  @IsNumber()
  @IsPositive()
  productId: number;

  @ApiProperty({ example: 2, description: 'Quantity of product' })
  @IsNumber()
  @IsPositive()
  quantity: number;
}
