// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const rodoviaSchema = new Schema({
    codRodovia: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('rodovia', rodoviaSchema);