import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailUserAlreadyExists extends HttpException {
  constructor() {
    super('The email already exists', HttpStatus.BAD_REQUEST);
  }
}
