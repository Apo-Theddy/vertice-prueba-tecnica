import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IsNull, Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Fail, Ok, Result } from 'src/shared/patterns/result.pattern';
import { CreateUserDTO } from '../../application/dtos/create-user.dto';
import { EmailUserAlreadyExists } from '../../domain/exceptions/email-user-already-exists.exception';
import { EmailNotFoundException } from '../../domain/exceptions/email-not-found.exception';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import { UserResponse } from '../../application/types/user-response.type';

@Injectable()
export class UserAdapterRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly provider: Repository<User>,
  ) {}

  public async create(
    dto: CreateUserDTO,
  ): Promise<Result<User, HttpException>> {
    const user = this.provider.create(dto);
    const { isOk } = await this.findByEmail(dto.email);
    if (isOk) return Fail(new EmailUserAlreadyExists());
    const savedUser = await this.provider.save(user);
    return Ok(savedUser);
  }

  public async findByEmail(
    email: string,
  ): Promise<Result<User, HttpException>> {
    const user = await this.provider.findOneBy({ email, deletedAt: IsNull() });
    if (!user) return Fail(new EmailNotFoundException());
    return Ok(user);
  }

  public async profile(
    id: number,
  ): Promise<Result<UserResponse, HttpException>> {
    const user = await this.provider.findOneBy({ id, deletedAt: IsNull() });
    if (!user) return Fail(new UserNotFoundException());
    const { password, ...rest } = user;
    return Ok(rest);
  }
}
