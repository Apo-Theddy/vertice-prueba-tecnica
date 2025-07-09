import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../entities/user.entity';
import { HttpException } from '@nestjs/common';
import { UserResponse } from 'src/modules/user/application/types/user-response.type';

export interface UserProfileUseCase {
  profile(id: number): Promise<Result<UserResponse, HttpException>>;
}
