import { expect, it, describe, afterAll, beforeAll } from '@jest/globals';
import request from 'supertest';
import app from '../config/app';

describe('Testing Users', () => {
  /**Opens the server before all the tests */
  let server: any;
  beforeAll(async () => {
    server = app.listen(3000);
  });
  /**Closes the server and the mongoose connection after all the tests */
  afterAll(async () => {
    await server.close();
  });
  /**The tests*/
  describe('Requests', () => {
    it('Should return status code of 200', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('ok');
    });
    it('Should work', async () => {
      const res = await request(app).post('/image-search').send({
        query: 'dog',
        per_page: 10,
        page: 1,
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.photos).toBeDefined();
    });
  });
});
