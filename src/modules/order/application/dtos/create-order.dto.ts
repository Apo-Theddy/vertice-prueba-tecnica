import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { CreateOrderDetailDTO } from './create-order-detail.dto';
import { Type } from 'class-transformer';

export class CreateOrderDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDTO)
  orderDetails: CreateOrderDetailDTO[];
}
