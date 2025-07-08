import { IsArray, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDetailDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
