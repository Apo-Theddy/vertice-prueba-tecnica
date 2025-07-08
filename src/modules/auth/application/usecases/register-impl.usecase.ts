import { HttpException, Inject } from '@nestjs/common';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { RegisterUseCase } from '../../domain/ports/in/register.usecase';
import { Result } from 'src/shared/patterns/result.pattern';
import { RegisterDTO } from '../dtos/register.dto';
import { AuthResponseMapper } from '../mappers/auth-response.mapper';

export class RegisterImplUseCase implements RegisterUseCase {
  constructor(
    @Inject(RepositoryNames.AUTH_REPOSITORY)
    private readonly repository: AuthRepository,
  ) {}

  public async register(
    dto: RegisterDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    return this.repository.register(dto);
  }
}
