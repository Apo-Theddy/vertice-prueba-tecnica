import { HttpException, Inject } from '@nestjs/common';
import { CreateProductUseCase } from '../../domain/ports/in/create-product.usecases';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { Result } from 'src/shared/patterns/result.pattern';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductDTO } from '../dtos/create-product.dto';

export class CreateProductImplUseCase implements CreateProductUseCase {
  constructor(
    @Inject(RepositoryNames.PRODUCT_REPOSITORY)
    private readonly repository: ProductRepository,
  ) {}

  public async create(
    dto: CreateProductDTO,
  ): Promise<Result<Product, HttpException>> {
    return this.repository.create(dto);
  }
}
