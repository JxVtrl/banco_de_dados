// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const classeTaxonomicaSchema = new Schema({
    codClasseTaxonomica: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('classeTaxonomica', classeTaxonomicaSchema);