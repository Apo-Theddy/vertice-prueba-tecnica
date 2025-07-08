import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class TypeOrmConfig {
  public static setup(config: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: config.get<string>('DATABASE_HOST'),
      username: config.get<string>('DATABASE_USER'),
      password: config.get<string>('DATABASE_PASSWORD'),
      database: config.get<string>('DATABASE_NAME'),
      port: config.get<number>('DATABASE_PORT'),
      autoLoadEntities: true,
      synchronize: true,
      logger: 'debug',
    };
  }
}
