import { HttpException, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserService } from 'src/modules/user/application/services/user.service';
import { Fail, Ok, Result } from 'src/shared/patterns/result.pattern';
import { LoginDTO } from '../../application/dtos/login.dto';
import { AuthResponseMapper } from '../../application/mappers/auth-response.mapper';
import { RegisterDTO } from '../../application/dtos/register.dto';
import { InvalidCredentialsException } from '../../domain/exceptions/invalid-credentials.exception';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthAdapterRepository implements AuthRepository {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async login(
    dto: LoginDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    const { data, isFailure, error } = await this.userService.findByEmail(
      dto.email,
    );
    if (isFailure) return Fail(error!);
    const passwordMatch = await bcryptjs.compare(dto.password, data!.password);
    if (!passwordMatch) return Fail(new InvalidCredentialsException());
    const token = await this.jwtService.signAsync({
      sub: data!.id,
    });
    return Ok({ token, user: data! });
  }

  public async register(
    dto: RegisterDTO,
  ): Promise<Result<AuthResponseMapper, HttpException>> {
    const SALT_ROUNDS = parseInt(
      this.configService.get<string>('BCRYPT_SALT_ROUNDS', '10'),
      10,
    );
    const salt = await bcryptjs.genSalt(SALT_ROUNDS);
    dto.password = bcryptjs.hashSync(dto.password, salt);
    const { isFailure, error, data } = await this.userService.create(dto);
    if (isFailure) return Fail(error!);
    const token = await this.jwtService.signAsync({ sub: data!.id });
    return Ok({
      token,
      user: data!,
    });
  }
}
