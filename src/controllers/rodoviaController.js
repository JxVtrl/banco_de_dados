const rodovia = require('../models/rodoviaModel');

class rodoviaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('rodovia').find().toArray();

            console.log(obj)
            res.status(201).send('Resposta no console!');
        }
        catch {
            (err) => console.log(err);
            res.status(404).send('Não encontrado!');
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codRodovia } = req.body;
    
            const rodovia = await client.collection('rodovia').findOne({ 'codRodovia': codRodovia });
    
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
            const response = await client.collection('rodovia').insertOne(newRodovia);
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
            const response = await client.collection('rodovia').deleteOne({ 'codRodovia': codRodovia });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codRodovia } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados rodovia.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codRodovia, nome } = req.body;

            const response = await client
                .collection('rodovia')
                .findOneAndReplace(
                    { 'codRodovia': codRodovia }, 
                    {
                        'codRodovia': codRodovia,
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

module.exports = new rodoviaController();