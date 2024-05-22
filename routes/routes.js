// this handles the routes for the application
const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/', (_, res) => res.render('index'));

router.post('/submit-feedback', (req, res) => {
    const { username, password, country, enterprise, repositories } = req.body;
    pool.query('INSERT INTO users (username, password, country, enterprise, repositories) VALUES ($1, $2, $3, $4, $5)', [username, password, country, enterprise, repositories], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;
