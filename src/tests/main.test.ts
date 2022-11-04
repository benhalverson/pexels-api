import { expect, it, describe, beforeAll, afterAll } from '@jest/globals';
import supertest from 'supertest';
import app from '../config/app';

const request = supertest(app);

describe('GET /', () => {
  //Opens the server before all the tests
  let server: any;
  beforeAll(async () => {
    server = await app.listen(3000);
  });
  //Closes the server and the pool after all the tests
  afterAll(async () => {
    await server.close();
  });
  //The tests
  it.skip('Should return status code of 200', async () => {
    const response = await request.post('/image-search').send({ query: 'dog' });
    console.log('response', response.body);
    expect(response.statusCode).toBe(200);
  });

  it('should check the health endpoint', async () => {
    const response = await request.get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
