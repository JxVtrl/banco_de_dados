// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ocorrenciaSchema = new Schema({
    codOcorrencia: {
        type: Number,
        required: true,
        unique: true
    },
    data: {
        type: Date,
        required: true,
    },
    km: {
        type: Number,
        required: true
    },
    haviaAgua: {
        type: Boolean,
        required: true
    },
    numPistas: {
        type: Number,
        required: true
    },
    velocidadeMaxima: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ocorrencia', ocorrenciaSchema);