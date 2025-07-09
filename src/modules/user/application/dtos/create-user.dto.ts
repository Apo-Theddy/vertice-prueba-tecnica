import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'User first names',
    example: 'Juan Jesus',
    minLength: 5,
    maxLength: 60,
  })
  @IsString()
  @IsNotEmpty()
  @Length(5, 60)
  firstnames: string;

  @ApiProperty({
    description: 'User last names',
    example: 'Esquives Zapata',
    minLength: 5,
    maxLength: 60,
  })
  @IsString()
  @IsNotEmpty()
  @Length(5, 60)
  lastnames: string;

  @ApiProperty({
    description: 'User email',
    example: 'juanjesus@gmail.com',
    minLength: 5,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Length(5, 100)
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
