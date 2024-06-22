const ocorrenciaLocal = require('../models/ocorrenciaLocalModel');

class ocorrenciaLocalController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('ocorrenciaLocal').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} ocorrencias locais catalogadas.`)
            } else {
                res.status(201).send(`${contador} ocorrencia local catalogada.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codOcorrenciaLocal } = req.body;
    
            const ocorrenciaLocal = await client.db('test_db').collection('ocorrenciaLocal').findOne({ 'codOcorrenciaLocal': codOcorrenciaLocal });
    
            if(!ocorrenciaLocal) {
                console.log(`Objeto ${codOcorrenciaLocal} não encontrado!`);
                res.status(201).send(`Objeto ${codOcorrenciaLocal} não encontrado!`)
            } else {
                console.log(ocorrenciaLocal);
                res.status(201).send(
                    `Objeto ${ocorrenciaLocal.codOcorrenciaLocal}, ${ocorrenciaLocal.codTipoRegiao} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codOcorrenciaLocal, codTipoRegiao } = req.body;
            const newOcorrenciaLocal = new ocorrenciaLocal ({ codOcorrenciaLocal, codTipoRegiao });
            const response = await client.db('test_db').collection('ocorrenciaLocal').insertOne(newOcorrenciaLocal);

            // console.log(`Objeto adicionado ao banco de dados Unidade Federativa (uf)!`);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados ocorrencia local!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new ocorrenciaLocalController();