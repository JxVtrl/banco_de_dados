const ocorrencia = require('../models/ocorrenciaModel');

class ocorrenciaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.db('test_db').collection('ocorrencia').find().toArray();

            console.log(obj)
            
            res.status(200).send(obj);
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
                res.status(200).send(ocorrencia);
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { 
                codOcorrencia, 
                data, 
                km, 
                haviaAgua, 
                numPistas, 
                velocidadeMaxima, 
                codTipoPavimento,
                codCatLoc,
                codSituacao,
                codRodovia
            
            } = req.body; // definição dos valores dos campos
            
            const newOcorrencia = new ocorrencia ({ 
                codOcorrencia, 
                data, 
                km, 
                haviaAgua, 
                numPistas, 
                velocidadeMaxima, 
                codTipoPavimento, 
                codCatLoc,
                codSituacao,
                codRodovia
             }); // criação de um novo objeto com estes valores
             
            const response = await client.db('test_db').collection('ocorrencia').insertOne(newOcorrencia);

            console.log(response)
            res.status(201).send(`Objeto adicionado ao banco de dados Ocorrencia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codOcorrencia } = req.body;
            const response = await client.db('test_db').collection('uf').deleteOne({ 'codOcorrencia': codOcorrencia });
            console.log(response);
            res.status(200).send(`Objeto deletado do banco de dados Ocorrencia!`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados ocorrencia.`);
        }
    }
}

module.exports = new ocorrenciaController();