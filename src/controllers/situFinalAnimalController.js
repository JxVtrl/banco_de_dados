const situacaoFinalAnimal = require('../models/situFinalAnimalModel');

class situacaoFinalAnimalController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('situacaoFinalAnimal').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} situação catalogada.`)
            } else {
                res.status(201).send(`${contador} situação catalogada.`)
            }
    
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
                console.log(`Objeto ${situacaoFinalAnimal} não encontrado!`);
                res.status(404).send(`Objeto ${situacaoFinalAnimal} não encontrado!`)
            } else {
                console.log(situacaoFinalAnimal);
                res.status(201).send(
                    `Objeto ${situacaoFinalAnimal} encontrado!`
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
}

module.exports = new situacaoFinalAnimalController();