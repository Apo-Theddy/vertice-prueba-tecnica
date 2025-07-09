import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { OrderService } from '../../application/services/order.service';
import { Request as Req } from 'express';
import { CreateOrderDTO } from '../../application/dtos/create-order.dto';
import { OrderResponseMapperDTO } from '../../application/mapper/order-response.mapper';

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @ApiOperation({ summary: 'Get orders of authenticated user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of orders for the authenticated user',
    type: [OrderResponseMapperDTO],
  })
  @Get()
  public async getOrdersByUserId(@Request() req: Req) {
    const id = req.user!['userId'];
    const { isFailure, error, data } = await this.service.getOrdersByUserId(id);
    if (isFailure) throw error;
    return data;
  }

  @ApiOperation({ summary: 'Create new order' })
  @ApiBody({ type: CreateOrderDTO })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Order created successfully',
    type: OrderResponseMapperDTO,
  })
  @Post()
  public async create(@Body() dto: CreateOrderDTO, @Request() req: Req) {
    const userId = req.user!['userId'];
    const { isFailure, error, data } = await this.service.create(userId, dto);
    if (isFailure) throw error;
    return data;
  }
}
