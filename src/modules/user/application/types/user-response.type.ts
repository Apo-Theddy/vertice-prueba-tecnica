import { User } from '../../domain/entities/user.entity';

export type UserResponse = Omit<User, 'password'>;
