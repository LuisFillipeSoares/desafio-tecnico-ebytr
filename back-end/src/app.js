const express = require('express');

const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;
