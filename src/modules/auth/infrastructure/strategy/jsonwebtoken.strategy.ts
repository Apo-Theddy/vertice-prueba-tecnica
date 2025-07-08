import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JsonWebTokenStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    const JSONWEBTOKEN_SECRET = configService.get<string>(
      'JSONWEBTOKEN_SECRET',
    );
    if (!JSONWEBTOKEN_SECRET)
      throw Error('Json web token secret is not present');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JSONWEBTOKEN_SECRET')!,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub };
  }
}
