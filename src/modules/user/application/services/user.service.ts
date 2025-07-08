import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '../../domain/ports/in/create-user.usecase';
import { FindUserByEmailUseCase } from '../../domain/ports/in/find-user-by-email.usecase';
import { CreateUserImplUseCase } from '../usecases/create-user-impl.usecase';
import { FindUserByEmailImplUseCase } from '../usecases/find-user-by-email-impl.usecase';
import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserProfileUseCase } from '../../domain/ports/in/user-profile.usecase';
import { UserProfileImplUseCase } from '../usecases/user-profile.usecase';

@Injectable()
export class UserService
  implements CreateUserUseCase, FindUserByEmailUseCase, UserProfileUseCase
{
  constructor(
    private readonly createUserImpl: CreateUserImplUseCase,
    private readonly findUserByEmailImpl: FindUserByEmailImplUseCase,
    private readonly userProfileImpl: UserProfileImplUseCase,
  ) {}

  public async create(
    dto: CreateUserDTO,
  ): Promise<Result<User, HttpException>> {
    return this.createUserImpl.create(dto);
  }

  public async findByEmail(
    email: string,
  ): Promise<Result<User, HttpException>> {
    return this.findUserByEmailImpl.findByEmail(email);
  }

  public async profile(id: number): Promise<Result<User, HttpException>> {
    return this.userProfileImpl.profile(id);
  }
}
