
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes/routes');

const app = express();

// Middleware para permitir JSON no corpo da requisição
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000!');
});
