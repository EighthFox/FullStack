const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');

const app = express();

app.use(morgan("dev")); //Devuelve un console.log con el método (GET,POST,etc), la url, el estado, lo que tardó y res[content-length]

app.use(mainRouter);

module.exports = app;