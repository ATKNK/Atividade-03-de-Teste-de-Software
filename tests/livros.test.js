const request = require('supertest');
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