const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ocorrenciaLocalSchema = new Schema({
    codOcorrenciaLocal: {
        type: Number,
        required: true,
        unique: true
    },
    codTipoRegiao: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('ocorrenciaLocal', ocorrenciaLocalSchema);