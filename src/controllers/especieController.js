const especie = require('../models/especieModel');

class especieModel {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('especie').countDocuments();
    
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
            const { nome } = req.body;
    
            const especie = await client.db('test_db').collection('especie').findOne({ 'nome': nome });
    
            if(!especie) {
                console.log(`Objeto ${nome} não encontrado!`);
                res.status(201).send(`Objeto ${nome} não encontrado!`)
            } else {
                console.log(especie);
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
            const { codEspecie, nomeComum, codClasseTax } = req.body;
            const newEspecie = new especie({ codEspecie, nomeComum, codClasseTax });
            const response = await client.db('test_db').collection('especie').insertOne(newEspecie);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados classe taxonômica!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new classeTaxonomicaController();