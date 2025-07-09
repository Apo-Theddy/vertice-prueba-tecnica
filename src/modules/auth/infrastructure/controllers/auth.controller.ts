import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { RegisterDTO } from '../../application/dtos/register.dto';
import { LoginDTO } from '../../application/dtos/login.dto';
import { Public } from 'src/shared/decorators/public.decorator';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthResponseMapper } from '../../application/mappers/auth-response.mapper';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiOperation({
    summary: 'Register user',
    description: 'Register a user with their information',
  })
  @ApiOkResponse({
    description: 'Newly registered user with token',
    type: AuthResponseMapper,
  })
  @ApiBadRequestResponse({
    description: "The user's email is already in use",
  })
  @Post('register')
  @Public()
  public async register(@Body() dto: RegisterDTO) {
    const { isFailure, error, data } = await this.service.register(dto);
    if (isFailure) throw error;
    return data;
  }

  @ApiOperation({
    summary: 'Login user',
    description: 'Authenticate user and return access token',
  })
  @ApiOkResponse({
    description: 'Authenticated user with token',
    type: AuthResponseMapper,
  })
  @ApiBadRequestResponse({
    description: 'Invalid credentials or malformed request',
  })
  @Post('login')
  @Public()
  public async login(@Body() dto: LoginDTO) {
    const { isFailure, error, data } = await this.service.login(dto);
    if (isFailure) throw error;
    return data;
  }
}
