import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('Nayara rebrand (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    app = await NestFactory.create(AppModule);
    await app.init();
  });

  it('serves the home page at / (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/);
  });

  it('serves the stylesheet', () => {
    return request(app.getHttpServer())
      .get('/css/style.css')
      .expect(200)
      .expect('Content-Type', /css/);
  });

  it('exposes a health endpoint', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect({ status: 'ok', app: 'nayara-rebrand' });
  });

  afterEach(async () => {
    await app.close();
  });
});