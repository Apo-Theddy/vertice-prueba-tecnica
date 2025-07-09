import { ValidationPipe } from '@nestjs/common';

export class ValidationPipeConfig {
  public static get config() {
    return new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      always: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      transform: true,
    });
  }
}
