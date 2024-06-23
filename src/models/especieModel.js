// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const especieSchema = new Schema({
    codEspecie: {
        type: Number,
        required: true,
        unique: true
    },
    nomeComum: {
        type: String,
        required: true,
    },
    codClasseTax: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('especie', especieSchema);