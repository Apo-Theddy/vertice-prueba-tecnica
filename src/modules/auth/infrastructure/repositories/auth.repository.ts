import { Result } from 'src/shared/patterns/result.pattern';
import { LoginDTO } from '../../application/dtos/login.dto';
import { AuthResponseMapper } from '../../application/mappers/auth-response.mapper';
import { HttpException } from '@nestjs/common';
import { RegisterDTO } from '../../application/dtos/register.dto';

export interface AuthRepository {
  login(dto: LoginDTO): Promise<Result<AuthResponseMapper, HttpException>>;
  register(
    dto: RegisterDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>>;
}
