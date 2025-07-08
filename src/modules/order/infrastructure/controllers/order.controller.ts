import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { OrderService } from '../../application/services/order.service';
import { Request as Req } from 'express';
import { CreateOrderDTO } from '../../application/dtos/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get()
  public async getOrdersByUserId(@Request() req: Req) {
    const id = req.user!['userId'];
    const { isFailure, error, data } = await this.service.getOrdersByUserId(id);
    if (isFailure) throw error;
    return data;
  }

  @Post()
  public async create(@Body() dto: CreateOrderDTO, @Request() req: Req) {
    const userId = req.user!['userId'];
    const { isFailure, error, data } = await this.service.create(userId, dto);
    if (isFailure) throw error;
    return data;
  }
}
