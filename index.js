

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/api', (req, res) => {
    res.send('Hello World');
});
const app2 = express();
app2.get('/status', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
app2.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);