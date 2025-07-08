import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { RegisterDTO } from '../../application/dtos/register.dto';
import { LoginDTO } from '../../application/dtos/login.dto';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  @Public()
  public async register(@Body() dto: RegisterDTO) {
    const { isFailure, error, data } = await this.service.register(dto);
    if (isFailure) throw error;
    return data;
  }

  @Post('login')
  @Public()
  public async login(@Body() dto: LoginDTO) {
    const { isFailure, error, data } = await this.service.login(dto);
    if (isFailure) throw error;
    return data;
  }
}
