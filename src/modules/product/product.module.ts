import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './domain/entities/product.entity';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { ProductAdapterRepository } from './infrastructure/repositories/product-adapter.repository';
import { ProductService } from './application/services/product.service';
import { CreateProductImplUseCase } from './application/usecases/create-product-impl.usecase';
import { ProductController } from './infrastructure/controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    {
      provide: RepositoryNames.PRODUCT_REPOSITORY,
      useClass: ProductAdapterRepository,
    },
    ProductService,
    CreateProductImplUseCase,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
