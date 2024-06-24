// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const categoriaLocalSchema = new Schema({
    codCatLoc: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
    },
    codUf: {
        type: Number,
        required: true
    },
    codEspecie: {
        type: Number,
        required: true
    },
    codCategoria: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('categoriaLocal', categoriaLocalSchema);