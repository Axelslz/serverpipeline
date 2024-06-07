const request = require('supertest');
const express = require('express');

const app = express();
app.get('/api/v1/welcome', (req, res) => {
    res.status(200).send('Hello people');
});

describe('GET /api/v1/welcome', () => {
    it('respond with Hello people', (done) => {
        request(app)
            .get('/api/v1/welcome')
            .expect('Hello people', done);
    });
});
