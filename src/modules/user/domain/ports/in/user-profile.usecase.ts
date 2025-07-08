import { Result } from 'src/shared/patterns/result.pattern';
import { User } from '../../entities/user.entity';
import { HttpException } from '@nestjs/common';

export interface UserProfileUseCase {
  profile(id: number): Promise<Result<User, HttpException>>;
}
