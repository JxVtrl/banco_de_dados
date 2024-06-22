const classeTaxonomica = require('../models/classeTaxModel');

class classeTaxonomicaController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('classeTaxonomica').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} classes taxonômicas catalogadas.`)
            } else {
                res.status(201).send(`${contador} classe taxonômica catalogada.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codClasseTaxonomica } = req.body;
    
            const classeTaxonomica = await client.db('test_db').collection('classeTaxonomica').findOne({ 'codClasseTaxonomica': codClasseTaxonomica });
    
            if(!classeTaxonomica) {
                console.log(`Objeto de identificador ${codClasseTaxonomica} não encontrado!`);
                res.status(404).send(`Objeto de identificador ${codClasseTaxonomica} não encontrado!`)
            } else {
                console.log(classeTaxonomica);
                res.status(201).send(
                    `Objeto ${classeTaxonomica.nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codClasseTaxonomica, nome } = req.body;
            const newClasseTaxonomica = new classeTaxonomica({ codClasseTaxonomica, nome });
            const response = await client.db('test_db').collection('classeTaxonomica').insertOne(newClasseTaxonomica);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados classe taxonômica!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new classeTaxonomicaController();