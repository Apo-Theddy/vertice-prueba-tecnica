import { Result } from 'src/shared/patterns/result.pattern';
import { Order } from '../../entities/order.entity';
import { HttpException } from '@nestjs/common';

export interface GetOrdersByUserIdUseCase {
  getOrdersByUserId(userId: number): Promise<Result<Order[], HttpException>>;
}
