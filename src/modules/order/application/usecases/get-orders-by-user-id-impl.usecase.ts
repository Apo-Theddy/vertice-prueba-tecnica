import { HttpException, Inject } from '@nestjs/common';
import { GetOrdersByUserIdUseCase } from '../../domain/ports/in/get-orders-by-user-id.usecase';
import { OrderRepository } from '../../infrastructure/repositories/order.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { Result } from 'src/shared/patterns/result.pattern';
import { Order } from '../../domain/entities/order.entity';

export class GetOrdersByUserIdImplUseCase implements GetOrdersByUserIdUseCase {
  constructor(
    @Inject(RepositoryNames.ORDER_REPOSITORY)
    private readonly repository: OrderRepository,
  ) {}

  public async getOrdersByUserId(
    userId: number,
  ): Promise<Result<Order[], HttpException>> {
    return this.repository.getOrdersByUserId(userId);
  }
}
