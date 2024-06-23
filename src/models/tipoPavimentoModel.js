// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tipoPavimentoSchema = new Schema({
    codTipoPavimento: {
        type: Number,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('tipoPavimento', tipoPavimentoSchema);