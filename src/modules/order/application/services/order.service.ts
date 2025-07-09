import { HttpException, Injectable } from '@nestjs/common';
import { CreateOrderUseCase } from '../../domain/ports/in/create-order.usecase';
import { GetOrdersByUserIdUseCase } from '../../domain/ports/in/get-orders-by-user-id.usecase';
import { CreateOrderImplUseCase } from '../usecases/create-order-impl.usecase';
import { GetOrdersByUserIdImplUseCase } from '../usecases/get-orders-by-user-id-impl.usecase';
import { Result } from 'src/shared/patterns/result.pattern';
import { Order } from '../../domain/entities/order.entity';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { OrderResponseMapperDTO } from '../mapper/order-response.mapper';

@Injectable()
export class OrderService
  implements CreateOrderUseCase, GetOrdersByUserIdUseCase
{
  constructor(
    private readonly createOrderImpl: CreateOrderImplUseCase,
    private readonly getOrdersByUserIdImpl: GetOrdersByUserIdImplUseCase,
  ) {}

  public create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapperDTO, HttpException>> {
    return this.createOrderImpl.create(userId, dto);
  }

  public getOrdersByUserId(
    userId: number,
  ): Promise<Result<Order[], HttpException>> {
    return this.getOrdersByUserIdImpl.getOrdersByUserId(userId);
  }
}
