import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';

export class RedocConfig {
  public static async init(app: INestApplication, swaggerDoc: OpenAPIObject) {
    const options: RedocOptions = {
      title: 'Vertice API',
      docName: 'Vertice',
      hideLoading: true,
      hideHostname: true,
      hideDownloadButton: true,
    };
    await RedocModule.setup('/docs', app as any, swaggerDoc, options);
  }
}
