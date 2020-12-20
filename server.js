'use strict';

const express = require('express');

// константы
const CFG_PORT = 8080;
const CFG_HOST = '0.0.0.0';

// // приложение
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use(express.static('public'))

app.listen(CFG_PORT, CFG_HOST);
console.log(`running on http://${CFG_HOST}:${CFG_PORT}`);
