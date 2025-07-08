import { HttpException, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Repository } from 'typeorm';
import { Product } from '../../domain/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Ok, Result } from 'src/shared/patterns/result.pattern';
import { CreateProductDTO } from '../../application/dtos/create-product.dto';

@Injectable()
export class ProductAdapterRepository implements ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly provider: Repository<Product>,
  ) {}

  public async create(
    dto: CreateProductDTO,
  ): Promise<Result<Product, HttpException>> {
    const product = this.provider.create(dto);
    const savedProduct = await this.provider.save(product);
    return Ok(product);
  }
}
