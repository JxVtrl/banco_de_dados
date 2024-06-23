const tipoPavimento = require('../models/tipoPavimentoModel');

class situacaoFinalAnimalController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.db('test_db').collection('tipoPavimento').find().toArray();

            console.log(obj)
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            
            const { codTipoPavimento } = req.body;
    
            const tipoPavimento = await client.db('test_db').collection('tipoPavimento').findOne({ 'codTipoPavimento': codTipoPavimento });
    
            if(!tipoPavimento) {
                console.log(`Objeto de identificador ${codTipoPavimento} não encontrado!`);
                res.status(404).send(`Objeto de identificador ${codTipoPavimento} não encontrado!`)
            } else {
                console.log(tipoPavimento);
                res.status(201).send(
                    `Objeto ${tipoPavimento.descricao} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codTipoPavimento, descricao } = req.body;
            const newTipoPavimento = new tipoPavimento({ codTipoPavimento, descricao });
            const response = await client.db('test_db').collection('tipoPavimento').insertOne(newTipoPavimento);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados tipoPavimento!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codTipoPavimento } = req.body;
            const response = await client.db('test_db').collection('uf').deleteOne({ 'codTipoPavimento': codTipoPavimento });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codTipoPavimento } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados tipo pavimento.`);
        }
    }
}

module.exports = new situacaoFinalAnimalController();