import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const categoriaSchema = new Schema({
    codCategoria: {
        type: Number,
        required: true,
        unique: true
    },
    nomeCategoria: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('categoria', categoriaSchema);