const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('PUBLIC ROUTE');
});

app.get('/login', (req, res) => {
    res.json({message: 'You are logged in'});
});

app.listen(8000, () => {
    console.log('***App running on port 8000***');
});