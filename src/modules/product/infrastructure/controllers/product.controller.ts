import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDTO } from '../../application/dtos/create-product.dto';
import { Public } from 'src/shared/decorators/public.decorator';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ type: CreateProductDTO })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Product successfully created',
    schema: {
      example: {
        id: 1,
        name: 'Laptop Gamer ASUS TUF',
        detail: 'Intel i7 16GB RAM, RTX 4060',
        quantity: 10,
        price: 1499.99,
        createdAt: '2025-07-09T14:20:00.000Z',
        updatedAt: '2025-07-09T14:20:00.000Z',
      },
    },
  })
  @Post('/')
  @Public()
  public async create(@Body() dto: CreateProductDTO) {
    const { isFailure, error, data } = await this.service.create(dto);
    if (isFailure) throw error;
    return data;
  }
}
