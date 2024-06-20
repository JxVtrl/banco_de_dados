// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ufSchema = new Schema({
    codUf: {
        type: Number,
        required: true,
        unique: true,
    },
    nome: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('uf', ufSchema);