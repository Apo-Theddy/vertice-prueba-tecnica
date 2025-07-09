import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeConfig } from './core/configs/validation-pipe.config';
import { SwaggerConfig } from './core/configs/swagger.config';
import * as compression from 'compression';
import { RedocConfig } from './core/configs/redoc.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  app.setGlobalPrefix('/v1/api');
  app.useGlobalPipes(ValidationPipeConfig.config);

  app.use(compression());

  const swaggerDocument = SwaggerConfig.create(app);
  await RedocConfig.init(app, swaggerDocument);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
