import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty({
    example: 'Laptop Gamer ASUS TUF F15',
    description: 'Name of the product',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Intel i7, 16GB RAM, RTX 4060',
    description: 'Optional detailed description of the product',
  })
  @IsOptional()
  @IsString()
  detail?: string;

  @ApiProperty({
    example: 10,
    description: 'Initial stock quantity',
  })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    example: 1499.99,
    description: 'Unit price of the product',
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
