const rodovia = require('../models/rodoviaModel');

class rodoviaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.db('test_db').collection('rodovia').find().toArray();

            console.log(obj)
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codRodovia } = req.body;
    
            const rodovia = await client.db('test_db').collection('rodovia').findOne({ 'codRodovia': codRodovia });
    
            if(!rodovia) {
                console.log(`Objeto de id ${codRodovia} não encontrado!`);
                res.status(404).send(`Objeto ${codRodovia} não encontrado!`)
            } else {
                console.log(rodovia);
                res.status(201).send(
                    `Objeto ${rodovia.nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codRodovia, nome } = req.body;
            const newRodovia = new rodovia({ codRodovia, nome });
            const response = await client.db('test_db').collection('rodovia').insertOne(newRodovia);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados rodovia!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
    
    async deleteOne( req, res, client ) {
        try {
            const { codRodovia } = req.body;
            const response = await client.db('test_db').collection('uf').deleteOne({ 'codRodovia': codRodovia });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codRodovia } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados rodovia.`);
        }
    }
}

module.exports = new rodoviaController();