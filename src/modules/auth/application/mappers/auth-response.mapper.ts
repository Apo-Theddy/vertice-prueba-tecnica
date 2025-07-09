import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/modules/user/application/dtos/create-user.dto';
import { User } from 'src/modules/user/domain/entities/user.entity';

export class AuthResponseMapper {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...' })
  token: string;

  @ApiProperty({ type: CreateUserDTO })
  user: User;
}
