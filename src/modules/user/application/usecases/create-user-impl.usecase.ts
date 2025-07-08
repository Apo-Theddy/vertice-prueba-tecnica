import { HttpException, Inject } from '@nestjs/common';
import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../domain/entities/user.entity';
import { CreateUserUseCase } from '../../domain/ports/in/create-user.usecase';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

export class CreateUserImplUseCase implements CreateUserUseCase {
  constructor(
    @Inject(RepositoryNames.USER_REPOSITORY)
    private readonly repository: UserRepository,
  ) {}

  public async create(
    dto: CreateUserDTO,
  ): Promise<Result<User, HttpException>> {
    return this.repository.create(dto);
  }
}
