// @ts-nocheck
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../server'); 

let mongoServer;
let server;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.disconnect();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  server = app.listen(3000);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  server.close(); // Закриття сервера
});

describe('GET /posts', () => {
  it('should return all posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(0); 
  });
});

describe('POST /posts', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        title: 'Новий пост',
        content: 'Контент нового поста'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('title', 'Новий пост');
    expect(res.body).toHaveProperty('content', 'Контент нового поста');
  });
});
