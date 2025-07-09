import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  public static create(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Vertice API')
      .setDescription('Vertice Basic API')
      .build();

    const documentFactory = SwaggerModule.createDocument(app, config);
    return documentFactory;
  }
}
