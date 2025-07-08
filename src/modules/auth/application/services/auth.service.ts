import { HttpException, Injectable } from '@nestjs/common';
import { LoginUseCase } from '../../domain/ports/in/login.usecase';
import { RegisterUseCase } from '../../domain/ports/in/register.usecase';
import { LoginImplUseCase } from '../usecases/login-impl.usecase';
import { RegisterImplUseCase } from '../usecases/register-impl.usecase';
import { Result } from 'src/shared/patterns/result.pattern';
import { LoginDTO } from '../dtos/login.dto';
import { AuthResponseMapper } from '../mappers/auth-response.mapper';
import { RegisterDTO } from '../dtos/register.dto';

@Injectable()
export class AuthService implements LoginUseCase, RegisterUseCase {
  constructor(
    private readonly loginImpl: LoginImplUseCase,
    private readonly registerImpl: RegisterImplUseCase,
  ) {}

  public async login(
    dto: LoginDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    const result = await this.loginImpl.login(dto);
    return result;
  }

  public async register(
    dto: RegisterDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    const result = await this.registerImpl.register(dto);
    return result;
  }
}
