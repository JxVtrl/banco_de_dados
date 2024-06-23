// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const situacaoFinalAnimalSchema = new Schema({
    codSituacao: {
        type: Number,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('situacaoFinalAnimal', situacaoFinalAnimalSchema);