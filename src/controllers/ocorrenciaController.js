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
            res.status(200).send(`Objeto adicionado ao banco de dados ocorrencia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codOcorrencia } = req.body;
            const response = await client.collection('ocorrencia').deleteOne({ 'codOcorrencia': codOcorrencia });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codOcorrencia } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados.`);
        }
    }

    async updateOne( req, res, client ) {
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

            const response = await client
                .collection('ocorrencia')
                .findOneAndReplace(
                    { 'codOcorrencia': codOcorrencia },
                    {
                        'codOcorrencia': codOcorrencia,
                        'data': data,
                        'km': km,
                        'haviaAgua': haviaAgua,
                        'numPistas': numPistas,
                        'velocidadeMaxima': velocidadeMaxima,
                        'codTipoPavimento': codTipoPavimento,
                        'codCatLoc': codCatLoc,
                        'codSituacao': codSituacao,
                        'codRodovia': codRodovia,
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }
}

module.exports = new ocorrenciaController();