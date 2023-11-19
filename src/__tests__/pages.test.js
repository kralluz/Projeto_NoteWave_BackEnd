const request = require('supertest');
const app = require('../app');

describe('GET /pages/:id', () => {
    it('responds with the correct page data', async () => {
        const pageId = 1; 
        const response = await request(app).get(`/pages/${pageId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('pageId', pageId);
        expect(response.body).toHaveProperty('title');
        expect(response.body).toHaveProperty('notes');
        expect(response.body.notes).toBeInstanceOf(Array);

    });
});