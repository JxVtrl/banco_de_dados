const especie = require('../models/especieModel');

class especieController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('especie').find().toArray();

            console.log(obj)
            res.status(201).send('Resposta no console!');
        }
        catch {
            (err) => console.log(err);
            res.status(201).send('Não encontrado!');
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codEspecie } = req.body;
    
            const especie = await client.collection('especie').findOne({ 'codEspecie': codEspecie });
    
            if(!especie) {
                console.log(`Objeto ${codEspecie} não encontrado!`);
                res.status(404).send(`Objeto ${codEspecie} não encontrado!`)
            } else {
                console.log(especie);
                res.status(201).send(
                    `Objeto ${especie.nomeComum} encontrado!`
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
            const response = await client.collection('especie').insertOne(newEspecie);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados especie!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
    
    async deleteOne( req, res, client ) {
        try {
            const { codEspecie } = req.body;
            const response = await client.collection('especie').deleteOne({ 'codEspecie': codEspecie });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codEspecie } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codEspecie, nomeComum, codClasseTax } = req.body;

            const response = await client
                .collection('especie')
                .findOneAndReplace(
                    { 'codEspecie': codEspecie }, 
                    {
                        'codEspecie': codEspecie,
                        'nomeComum': nomeComum,
                        'codClasseTax': codClasseTax
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }
}

module.exports = new especieController();