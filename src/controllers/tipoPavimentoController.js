const tipoPavimento = require('../models/tipoPavimentoModel');

class situacaoFinalAnimalController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('tipoPavimento').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} tipos de pavimentos catalogados.`)
            } else {
                res.status(201).send(`${contador} tipo de pavimento catalogado.`)
            }
    
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
                console.log(`Objeto ${codTipoPavimento} não encontrado!`);
                res.status(404).send(`Objeto ${codTipoPavimento} não encontrado!`)
            } else {
                console.log(tipoPavimento);
                res.status(201).send(
                    `Objeto ${tipoPavimento} encontrado!`
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
}

module.exports = new situacaoFinalAnimalController();