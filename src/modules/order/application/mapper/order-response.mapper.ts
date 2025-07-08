import { OrderDetail } from '../../domain/entities/order-detail.entity';

export interface OrderResponseMapper {
  totalAmount: number;
  products: OrderDetail[];
}
