const request = require('supertest');
const app = require('../app');

describe('GET /notes', () => {
    it('responds with json', async (done) => {
        const response = await request(app).get('/notes');
        expect(response.body).toBeIstanceOf(200);
    });
});