import { Result } from 'src/shared/patterns/result.pattern';
import { CreateProductDTO } from '../../application/dtos/create-product.dto';
import { Product } from '../../domain/entities/product.entity';
import { HttpException } from '@nestjs/common';

export interface ProductRepository {
  create(dto: CreateProductDTO): Promise<Result<Product, HttpException>>;
}
