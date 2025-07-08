import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductUseCase } from '../../domain/ports/in/create-product.usecases';
import { CreateProductImplUseCase } from '../usecases/create-product-impl.usecase';
import { Result } from 'src/shared/patterns/result.pattern';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductDTO } from '../dtos/create-product.dto';

@Injectable()
export class ProductService implements CreateProductUseCase {
  constructor(private readonly createProductImpl: CreateProductImplUseCase) {}

  public async create(
    dto: CreateProductDTO,
  ): Promise<Result<Product, HttpException>> {
    return this.createProductImpl.create(dto);
  }
}
