import { HttpException } from '@nestjs/common';
import { LoginDTO } from 'src/modules/auth/application/dtos/login.dto';
import { AuthResponseMapper } from 'src/modules/auth/application/mappers/auth-response.mapper';
import { Result } from 'src/shared/patterns/result.pattern';

export interface LoginUseCase {
  login(dto: LoginDTO): Promise<Result<AuthResponseMapper, HttpException>>;
}
