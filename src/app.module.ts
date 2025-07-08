import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './core/configs/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JsonWebTokenConfig } from './core/configs/jsonwebtoken.config';
import { APP_GUARD } from '@nestjs/core';
import { JsonWebTokenStrategy } from './modules/auth/infrastructure/strategy/jsonwebtoken.strategy';
import { PassportModule } from '@nestjs/passport';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => TypeOrmConfig.setup(config),
    }),
    UserModule,
    AuthModule,
    ProductModule,
    OrderModule,
  ],
  providers: [],
})
export class AppModule {}
