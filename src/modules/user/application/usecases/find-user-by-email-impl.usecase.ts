import { HttpException, Inject } from '@nestjs/common';
import { FindUserByEmailUseCase } from '../../domain/ports/in/find-user-by-email.usecase';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../domain/entities/user.entity';

export class FindUserByEmailImplUseCase implements FindUserByEmailUseCase {
  constructor(
    @Inject(RepositoryNames.USER_REPOSITORY)
    private readonly repository: UserRepository,
  ) {}

  public async findByEmail(
    email: string,
  ): Promise<Result<User, HttpException>> {
    return this.repository.findByEmail(email);
  }
}
