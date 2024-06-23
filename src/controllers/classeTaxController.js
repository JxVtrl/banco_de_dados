const classeTaxonomica = require('../models/classeTaxModel');

class classeTaxonomicaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('classeTaxonomica').find().toArray();

            console.log(obj)
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codClasseTaxonomica } = req.body;
    
            const classeTaxonomica = await client.collection('classeTaxonomica').findOne({ 'codClasseTaxonomica': codClasseTaxonomica });
    
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
            const response = await client.collection('classeTaxonomica').insertOne(newClasseTaxonomica);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados classe taxonômica!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codClasseTaxonomica } = req.body;
            const response = await client.db('test_db').collection('codClasseTaxonomica').deleteOne({ 'codClasseTaxonomica': codClasseTaxonomica });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codClasseTaxonomica } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados classe taxonomica.`);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codClasseTaxonomica } = req.body;
            const response = await client.collection('classeTaxonomica').deleteOne({ 'codClasseTaxonomica': codClasseTaxonomica });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codClasseTaxonomica } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados rodovia.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codClasseTaxonomica, nome } = req.body;

            const response = await client
                .collection('classeTaxonomica')
                .findOneAndReplace(
                    { 'codClasseTaxonomica': codClasseTaxonomica }, 
                    {
                        'codClasseTaxonomica': codClasseTaxonomica,
                        'nome': nome
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }
}

module.exports = new classeTaxonomicaController();