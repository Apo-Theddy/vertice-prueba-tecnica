import { ApiProperty } from '@nestjs/swagger';
import { OrderDetail } from '../../domain/entities/order-detail.entity';

export class OrderResponseMapperDTO {
  @ApiProperty({
    example: 99.9,
    description: 'Total amount to be paid for the order',
  })
  totalAmount: number;

  @ApiProperty({
    type: [OrderDetail],
    description: 'List of products included in the order',
  })
  products: OrderDetail[];
}
