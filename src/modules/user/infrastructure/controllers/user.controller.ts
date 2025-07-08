import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { Request as Req } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/me')
  public async profile(@Request() req: Req) {
    const id = req.user!['userId'];
    const { isFailure, error, data } = await this.service.profile(id);
    if (isFailure) throw error;
    return data;
  }
}
