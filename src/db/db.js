const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
// const { MongoClient, ServerApiVersion } = require('mongodb')

// const client = new MongoClient(process.env.mongo_url, {
//     serverApi:
//     {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }  
// });

const client = mongoose.connection;

// const connectDb = ( req, res, client ) => {
//     client
//     .connect(process.env.mongo_url)
//     .then(() => {
//         console.log('Conectado ao banco de dados local com sucesso!');
//         res.status(200).send('Conectado ao banco de dados local com sucesso!');
//     })
//     .catch((err) => {
//         res.status(404).send('Houve um erro na conexão com o banco de dados.');
//         console.error(err);
//     })
// }

const connectDb = ( req, res, client ) => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/test_db")
    .then(() => {
        console.log('Conectado ao banco de dados local com sucesso!');
        res.status(200).send('Conectado ao banco de dados local com sucesso!');
    })
    .catch(err => {
        res.status(404).send('Houve um erro na conexão com o banco de dados.');
        console.error(err);
});}

module.exports = { client, connectDb };