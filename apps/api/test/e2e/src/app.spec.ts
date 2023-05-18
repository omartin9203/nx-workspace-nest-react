import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app/app.module';

describe('GET /api', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  it('should return a message', async () => {
    return request(app.getHttpServer()).get('/api', (res: Response) => {
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ message: 'Hello API' });
    });
  });
});
