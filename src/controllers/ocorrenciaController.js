const ocorrencia = require('../models/ocorrenciaModel');

class ocorrenciaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.db('test_db').collection('ocorrencia').find().toArray();

            console.log(obj)
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codOcorrencia } = req.body;
    
            const ocorrencia = await client.db('test_db').collection('ocorrencia').findOne({ 'codOcorrencia': codOcorrencia });
    
            if(!ocorrencia) {
                console.log(`Objeto ${codOcorrencia} não encontrado!`);
                res.status(404).send(`Objeto ${codOcorrencia} não encontrado!`)
            } else {
                console.log(ocorrencia);
                res.status(201).send(
                    `Objeto ${ocorrencia.codOcorrencia} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codOcorrencia, data, km, haviaAgua, numPistas, velocidadeMaxima } = req.body;
            const newOcorrencia = new ocorrencia ({ codOcorrencia, data, km, haviaAgua, numPistas, velocidadeMaxima });
            const response = await client.db('test_db').collection('ocorrencia').insertOne(newOcorrencia);

            // console.log(`Objeto adicionado ao banco de dados Unidade Federativa (uf)!`);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados ocorrencia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new ocorrenciaController();