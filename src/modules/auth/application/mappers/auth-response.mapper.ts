import { User } from 'src/modules/user/domain/entities/user.entity';

export interface AuthResponseMapper {
  token: string;
  user: User;
}
