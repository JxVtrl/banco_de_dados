
const express = require('express');
require('dotenv').config()
const routes = require('./routes/routes');
const app = express();
app.use(express.json());
const ufController = require('./controllers/ufController');
app.use(routes);

// configuração da porta da aplicação
app.listen(process.env.port, () => {
    console.log(`App running at port ${process.env.port}`);
})