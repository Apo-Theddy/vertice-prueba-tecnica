import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { UserProfileUseCase } from '../../domain/ports/in/user-profile.usecase';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { HttpException, Inject } from '@nestjs/common';
import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../domain/entities/user.entity';
import { UserResponse } from '../types/user-response.type';

export class UserProfileImplUseCase implements UserProfileUseCase {
  constructor(
    @Inject(RepositoryNames.USER_REPOSITORY)
    private readonly repository: UserRepository,
  ) {}

  public async profile(
    id: number,
  ): Promise<Result<UserResponse, HttpException>> {
    return this.repository.profile(id);
  }
}
