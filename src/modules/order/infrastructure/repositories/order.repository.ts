import { Result } from 'src/shared/patterns/result.pattern';
import { CreateOrderDTO } from '../../application/dtos/create-order.dto';
import { Order } from '../../domain/entities/order.entity';
import { HttpException } from '@nestjs/common';
import { OrderResponseMapper } from '../../application/mapper/order-response.mapper';

export interface OrderRepository {
  create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapper, HttpException>>;
  getOrdersByUserId(userId: number): Promise<Result<Order[], HttpException>>;
}
