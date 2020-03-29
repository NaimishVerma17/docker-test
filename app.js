const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DATABASE = 'mongodb://mymongo:27017/test';

app.get('/', (req, res) => {
    res.send('PUBLIC ROUTE');
});

app.get('/login', (req, res) => {
    res.json({message: 'You are logged in'});
});

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected successfully!');
    })
    .catch((err) => {
        console.log('Connection failed!', err);
    });

app.listen(8000, () => {
    console.log('***App running on port 8000***');
});