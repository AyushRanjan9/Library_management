
const request = require('supertest');
const app = require('../app');

// Test suite for author routes
describe('Author API Endpoints', () => {
    it('should fetch all authors', async () => {
        const res = await request(app).get('/authors');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });

    it('should create a new author', async () => {
        const newAuthor = { AuthorName: 'New Author', Biography: 'Biography here' };
        const res = await request(app).post('/authors').send(newAuthor);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('AuthorID');
    });
});
