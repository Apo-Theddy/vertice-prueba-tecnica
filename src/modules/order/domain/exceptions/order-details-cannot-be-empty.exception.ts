import { HttpException, HttpStatus } from '@nestjs/common';

export class OrderDetailsCannotBeEmptyException extends HttpException {
  constructor() {
    super('Order details cannot be empty', HttpStatus.BAD_REQUEST);
  }
}
