const ocorrenciaLocal = require('../models/ocorrenciaLocalModel');

class ocorrenciaLocalController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('categoriaLocal').find().toArray();

            console.log(obj)
            res.status(201).send('Resposta no console!');

            return obj
        }
        catch {
            (err) => console.log(err);
            res.status(404).send('Não encontrado!');
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codOcorrenciaLocal } = req.body;
    
            const ocorrenciaLocal = await client.collection('ocorrenciaLocal').findOne({ 'codOcorrenciaLocal': codOcorrenciaLocal });
    
            if(!ocorrenciaLocal) {
                console.log(`Objeto ${codOcorrenciaLocal} não encontrado!`);
                res.status(404).send(`Objeto ${codOcorrenciaLocal} não encontrado!`)
            } else {
                console.log(ocorrenciaLocal);
                res.status(201).send(
                    `Objeto ${ocorrenciaLocal.codOcorrenciaLocal}, ${ocorrenciaLocal.codTipoRegiao} encontrado!`
                )

                return ocorrenciaLocal;
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
            const response = await client.collection('ocorrenciaLocal').insertOne(newOcorrenciaLocal);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados ocorrencia local!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
    
    async deleteOne( req, res, client ) {
        try {
            const { codOcorrenciaLocal } = req.body;
            const response = await client.collection('ocorrenciaLocal').deleteOne({ 'codOcorrenciaLocal': codOcorrenciaLocal });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codOcorrenciaLocal } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codOcorrenciaLocal, codTipoRegiao } = req.body;

            const response = await client
                .collection('ocorrenciaLocal')
                .findOneAndReplace(
                    { 'codOcorrenciaLocal': codOcorrenciaLocal },
                    {
                        'codOcorrenciaLocal': codOcorrenciaLocal,
                        'codTipoRegiao': codTipoRegiao,
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }
}

module.exports = new ocorrenciaLocalController();