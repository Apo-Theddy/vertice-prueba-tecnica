import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotAvailableInStockException extends HttpException {
  constructor() {
    super('Product stock is not available', HttpStatus.BAD_REQUEST);
  }
}
