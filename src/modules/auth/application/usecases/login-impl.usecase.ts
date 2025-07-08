import { HttpException, Inject } from '@nestjs/common';
import { LoginUseCase } from '../../domain/ports/in/login.usecase';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { Result } from 'src/shared/patterns/result.pattern';
import { LoginDTO } from '../dtos/login.dto';
import { AuthResponseMapper } from '../mappers/auth-response.mapper';

export class LoginImplUseCase implements LoginUseCase {
  constructor(
    @Inject(RepositoryNames.AUTH_REPOSITORY)
    private readonly repository: AuthRepository,
  ) {}

  public async login(
    dto: LoginDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    return this.repository.login(dto);
  }
}
