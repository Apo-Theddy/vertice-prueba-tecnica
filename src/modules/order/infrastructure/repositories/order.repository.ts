import { Result } from 'src/shared/patterns/result.pattern';
import { CreateOrderDTO } from '../../application/dtos/create-order.dto';
import { Order } from '../../domain/entities/order.entity';
import { HttpException } from '@nestjs/common';
import { OrderResponseMapperDTO } from '../../application/mapper/order-response.mapper';

export interface OrderRepository {
  create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapperDTO, HttpException>>;
  getOrdersByUserId(userId: number): Promise<Result<Order[], HttpException>>;
}
