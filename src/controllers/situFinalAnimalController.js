const situacaoFinalAnimal = require('../models/situFinalAnimalModel');

class situacaoFinalAnimalController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.db('test_db').collection('situacaoFinalAnimal').find().toArray();

            console.log(obj)
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            
            const { codSituacao } = req.body;
    
            const situacaoFinalAnimal = await client.db('test_db').collection('situacaoFinalAnimal').findOne({ 'codSituacao': codSituacao });
    
            if(!situacaoFinalAnimal) {
                console.log(`Objeto de identificador ${codSituacao} não encontrado!`);
                res.status(404).send(`Objeto de identificador ${codSituacao} não encontrado!`)
            } else {
                console.log(situacaoFinalAnimal);
                res.status(201).send(
                    `Objeto ${situacaoFinalAnimal.descricao} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codSituacao, descricao } = req.body;
            const newSituacaoFinalAnimal = new situacaoFinalAnimal({ codSituacao, descricao });
            const response = await client.db('test_db').collection('situacaoFinalAnimal').insertOne(newSituacaoFinalAnimal);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados rodovia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codSituacao } = req.body;
            const response = await client.db('test_db').collection('uf').deleteOne({ 'codSituacao': codSituacao });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codSituacao } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados situacao final animal.`);
        }
    }
}

module.exports = new situacaoFinalAnimalController();