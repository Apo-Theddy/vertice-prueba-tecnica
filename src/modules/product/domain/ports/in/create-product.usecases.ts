import { CreateProductDTO } from 'src/modules/product/application/dtos/create-product.dto';
import { Result } from 'src/shared/patterns/result.pattern';
import { Product } from '../../entities/product.entity';
import { HttpException } from '@nestjs/common';

export interface CreateProductUseCase {
  create(dto: CreateProductDTO): Promise<Result<Product, HttpException>>;
}
