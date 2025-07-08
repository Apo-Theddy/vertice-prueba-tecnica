import { Result } from 'src/shared/patterns/result.pattern';
import { Order } from '../../entities/order.entity';
import { HttpException } from '@nestjs/common';
import { CreateOrderDTO } from 'src/modules/order/application/dtos/create-order.dto';
import { OrderResponseMapper } from 'src/modules/order/application/mapper/order-response.mapper';

export interface CreateOrderUseCase {
  create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapper, HttpException>>;
}
