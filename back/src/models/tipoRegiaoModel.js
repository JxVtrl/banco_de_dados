// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tipoRegiaoSchema = new Schema({
    codTipoRegiao: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('tipoRegiao', tipoRegiaoSchema);