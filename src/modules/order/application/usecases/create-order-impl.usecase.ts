import { HttpException, Inject } from '@nestjs/common';
import { CreateOrderUseCase } from '../../domain/ports/in/create-order.usecase';
import { OrderRepository } from '../../infrastructure/repositories/order.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { Result } from 'src/shared/patterns/result.pattern';
import { Order } from '../../domain/entities/order.entity';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { OrderResponseMapperDTO } from '../mapper/order-response.mapper';

export class CreateOrderImplUseCase implements CreateOrderUseCase {
  constructor(
    @Inject(RepositoryNames.ORDER_REPOSITORY)
    private readonly repository: OrderRepository,
  ) {}

  public async create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapperDTO, HttpException>> {
    return this.repository.create(userId, dto);
  }
}
