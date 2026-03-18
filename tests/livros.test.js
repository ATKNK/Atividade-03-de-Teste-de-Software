const request = require('supertest');
const { Livro } = require('../src/models');
const api =    `http://localhost:${process.env.PORT || 3000}`

test('POST /livros cria um livro', async () => {
    const res = await request(api).post('/livros').send({ titulo: 'Clean Code', autor: 'Martin Code' });
    expect(res.status).toBe(201);
    expect(res.body.titulo).toBe('Clean Code');
});

test('GET /livros retorna um livro', async () => {
    const res = await request(api).get('/livros');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});

test('GET /livros:id retorna um livro específico', async () => {
    const res = await request(api).get('/livros/68');

    expect(res.status).toBe(200);
    expect(res.body.titulo).toEqual('Clean Code');
    expect(res.body.autor).toEqual('Martin Code');
});