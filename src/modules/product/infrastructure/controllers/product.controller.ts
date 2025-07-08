import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDTO } from '../../application/dtos/create-product.dto';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post('/')
  @Public()
  public async create(@Body() dto: CreateProductDTO) {
    const { isFailure, error, data } = await this.service.create(dto);
    if (isFailure) throw error;
    return data;
  }
}
