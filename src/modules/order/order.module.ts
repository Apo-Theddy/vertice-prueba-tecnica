import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './domain/entities/order.entity';
import { OrderDetail } from './domain/entities/order-detail.entity';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { OrderAdapterRepository } from './infrastructure/repositories/order-adapter.repository';
import { OrderService } from './application/services/order.service';
import { CreateOrderImplUseCase } from './application/usecases/create-order-impl.usecase';
import { GetOrdersByUserIdImplUseCase } from './application/usecases/get-orders-by-user-id-impl.usecase';
import { OrderController } from './infrastructure/controllers/order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetail])],
  providers: [
    {
      provide: RepositoryNames.ORDER_REPOSITORY,
      useClass: OrderAdapterRepository,
    },
    OrderService,
    CreateOrderImplUseCase,
    GetOrdersByUserIdImplUseCase,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
