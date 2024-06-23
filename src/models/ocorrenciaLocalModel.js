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
});

module.exports = mongoose.model('ocorrenciaLocal', ocorrenciaLocalSchema);