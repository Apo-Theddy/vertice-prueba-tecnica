import { HttpException } from '@nestjs/common';
import { RegisterDTO } from 'src/modules/auth/application/dtos/register.dto';
import { AuthResponseMapper } from 'src/modules/auth/application/mappers/auth-response.mapper';
import { Result } from 'src/shared/patterns/result.pattern';

export interface RegisterUseCase {
  register(
    dto: RegisterDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>>;
}
