import { Result } from 'src/shared/patterns/result.pattern';
import { CreateUserDTO } from '../../application/dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import { HttpException } from '@nestjs/common';
import { UserResponse } from '../../application/types/user-response.type';

export interface UserRepository {
  create(dto: CreateUserDTO): Promise<Result<User, HttpException>>;
  findByEmail(email: string): Promise<Result<User, HttpException>>;
  profile(id: number): Promise<Result<UserResponse, HttpException>>;
}
