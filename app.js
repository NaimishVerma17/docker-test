const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('PUBLIC ROUTE');
});

app.listen(8000, () => {
    console.log('***App running on port 8000***');
});