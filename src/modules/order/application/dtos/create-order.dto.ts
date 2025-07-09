import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOrderDetailDTO } from './create-order-detail.dto';

export class CreateOrderDTO {
  @ApiProperty({
    type: [CreateOrderDetailDTO],
    description: 'Array of order details (product and quantity)',
    example: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDTO)
  orderDetails: CreateOrderDetailDTO[];

  @ApiProperty({
    type: String,
    description: 'Shipping address for the order',
    example: '123 Main St, Springfield, IL',
  })
  @IsNotEmpty()
  @IsString()
  shippingAddress: string;
}
