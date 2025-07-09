import { HttpException, HttpStatus } from '@nestjs/common';

export class QuantityMustGreaterThanZeroException extends HttpException {
  constructor() {
    super('Quantity must be greater than zero', HttpStatus.BAD_REQUEST);
  }
}
