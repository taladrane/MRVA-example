const fs = require('fs');
const faker = require('faker');
const pool = require('./db');

// Create an array to hold the user data
let users = [];

// Use a loop to generate the fake data and add it to the array
for (let i = 0; i < 15; i++) {
    users.push([
        faker.internet.userName(), // username
        faker.internet.password(), // password
        faker.address.country(), // country
        faker.date.past().toISOString(), // last_login
        faker.company.companyName(), // enterprise
        faker.random.number(100) // # repositories they're in charge of
    ]);
}

// Use a loop to insert each user into the database
users.forEach(user => {
    pool.query('INSERT INTO users (username, password, country, last_login, enterprise, repositories) VALUES ($1, $2, $3, $4, $5, $6)', user, (err) => {
        if (err) throw err;
    });
});