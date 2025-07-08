import { CreateUserDTO } from 'src/modules/user/application/dtos/create-user.dto';
import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../entities/user.entity';
import { HttpException } from '@nestjs/common';

export interface CreateUserUseCase {
  create(dto: CreateUserDTO): Promise<Result<User, HttpException>>;
}
