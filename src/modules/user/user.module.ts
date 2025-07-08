import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { RepositoryNames } from 'src/shared/constants/repository-names.constant';
import { UserAdapterRepository } from './infrastructure/repositories/user-adapter.repository';
import { CreateUserImplUseCase } from './application/usecases/create-user-impl.usecase';
import { FindUserByEmailImplUseCase } from './application/usecases/find-user-by-email-impl.usecase';
import { UserProfileImplUseCase } from './application/usecases/user-profile.usecase';
import { UserService } from './application/services/user.service';
import { UserController } from './infrastructure/controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: RepositoryNames.USER_REPOSITORY,
      useClass: UserAdapterRepository,
    },
    UserService,
    CreateUserImplUseCase,
    FindUserByEmailImplUseCase,
    UserProfileImplUseCase,
  ],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
