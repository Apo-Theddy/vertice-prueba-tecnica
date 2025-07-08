import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { AuthAdapterRepository } from './infrastructure/repositories/auth-adapter.repository';
import { AuthService } from './application/services/auth.service';
import { LoginImplUseCase } from './application/usecases/login-impl.usecase';
import { RegisterImplUseCase } from './application/usecases/register-impl.usecase';
import { UserModule } from '../user/user.module';
import { JsonWebTokenStrategy } from './infrastructure/strategy/jsonwebtoken.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JsonWebTokenConfig } from 'src/core/configs/jsonwebtoken.config';
import { PassportModule } from '@nestjs/passport';
import { JsonWebTokenGuard } from './infrastructure/guards/jsonwebtoken.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => JsonWebTokenConfig.setup(config),
    }),
    UserModule,
    PassportModule,
  ],
  providers: [
    {
      provide: RepositoryNames.AUTH_REPOSITORY,
      useClass: AuthAdapterRepository,
    },
    { provide: APP_GUARD, useClass: JsonWebTokenGuard },
    AuthService,
    LoginImplUseCase,
    RegisterImplUseCase,
    JsonWebTokenStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
