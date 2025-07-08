import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export class JsonWebTokenConfig {
  public static setup(configService: ConfigService): JwtModuleOptions {
    return {
      global: true,
      secret: configService.get<string>('JSONWEBTOKEN_SECRET'),
      signOptions: {
        expiresIn: configService.get<string>('JSONWEBTOKEN_EXPIRES_IN'),
      },
    };
  }
}
