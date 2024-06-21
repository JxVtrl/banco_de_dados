const ocorrencia = require('../models/ocorrenciaModel');

class ocorrenciaController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('ocorrencia').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} ocorrencias de atropelamento catalogadas.`)
            } else {
                res.status(201).send(`${contador} ocorrencia de atropelamento local catalogada.`)
            }
    
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
                console.log(`Objeto ${nome} não encontrado!`);
                res.status(201).send(`Objeto ${nome} não encontrado!`)
            } else {
                console.log(ocorrencia);
                res.status(201).send(
                    `Objeto ${nome} encontrado!`
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