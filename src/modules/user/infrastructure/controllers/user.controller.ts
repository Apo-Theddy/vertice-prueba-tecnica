import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { Request as Req } from 'express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/me')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get current user profile',
    description: 'Retrieves the authenticated user profile',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User profile retrieved successfully',
    example: {
      id: 1,
      firstnames: 'Juan Jesus',
      lastnames: 'Esquives Zapata',
      email: 'juanjesus@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    example: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'User not found',
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access',
    example: {
      message: 'Unauthorized',
      statusCode: HttpStatus.UNAUTHORIZED,
    },
  })
  public async profile(@Request() req: Req) {
    const id = req.user!['userId'];
    const { isFailure, error, data } = await this.service.profile(id);
    if (isFailure) throw error;
    return data;
  }
}
