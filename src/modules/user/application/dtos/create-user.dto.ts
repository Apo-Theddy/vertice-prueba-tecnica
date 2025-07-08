import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  max,
  Max,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @Length(5, 60)
  firstnames: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 60)
  lastnames: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Length(5, 100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 40)
  password: string;
}
