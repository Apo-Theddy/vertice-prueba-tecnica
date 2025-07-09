import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'User email user',
    example: 'juanjesus@gmail.com',
    minLength: 5,
    maxLength: 60,
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Length(5, 60)
  email: string;

  @ApiProperty({
    description: 'User password (between 5 and 40 characters)',
    example: 'MySecureP4ssword',
    minLength: 5,
    maxLength: 40,
  })
  @IsString()
  @IsNotEmpty()
  @Length(5, 40)
  password: string;
}
