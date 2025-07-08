import { HttpException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { DataSource, Repository } from 'typeorm';
import { Order } from '../../domain/entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from '../../domain/entities/order-detail.entity';
import { Ok, Result } from 'src/shared/patterns/result.pattern';
import { CreateOrderDTO } from '../../application/dtos/create-order.dto';
import { Product } from 'src/modules/product/domain/entities/product.entity';
import { ProductNotFoundException } from '../../domain/exceptions/product-not-found.exception';
import { ProductNotAvailableInStockException } from '../../domain/exceptions/product-no-available.exception';
import { OrderResponseMapper } from '../../application/mapper/order-response.mapper';

@Injectable()
export class OrderAdapterRepository implements OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly provider: Repository<Order>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(
    userId: number,
    dto: CreateOrderDTO,
  ): Promise<Result<OrderResponseMapper, HttpException>> {
    return await this.dataSource.transaction(async (manager) => {
      const orderDetails: OrderDetail[] = [];
      let totalAmount = 0;
      for (const detail of dto.orderDetails) {
        const product = await manager.findOne(Product, {
          where: { id: detail.productId },
          lock: { mode: 'pessimistic_write' },
        });
        if (!product) throw new ProductNotFoundException();
        if (product.stock < detail.quantity)
          throw new ProductNotAvailableInStockException();
        product.stock -= detail.quantity;
        await manager.save(product);
        const orderDetail = manager.create(OrderDetail, {
          product,
          quantity: detail.quantity,
        });
        orderDetails.push(orderDetail);
        totalAmount += product.price * detail.quantity;
      }
      const savedOrderDetails = await manager.save(OrderDetail, orderDetails);
      const order = manager.create(Order, {
        user: { id: userId },
        orderDetails: savedOrderDetails,
        totalAmount,
      });
      const savedOrder = await manager.save(Order, order);
      return Ok({
        totalAmount,
        products: savedOrder.orderDetails,
      });
    });
  }

  public async getOrdersByUserId(
    userId: number,
  ): Promise<Result<Order[], HttpException>> {
    const orders = await this.provider.find({
      where: { user: { id: userId } },
    });
    return Ok(orders);
  }
}
