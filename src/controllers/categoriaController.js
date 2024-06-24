const categoria = require('../models/categoriaModel');

class categoriaController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('categoria').find().toArray();

            console.log(obj)
            res.status(201).send('Resposta no console!');

            return obj
        }
        catch {
            (err) => console.log(err);
            res.status(404).send('Não encontrado!');
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codCategoria } = req.body;
    
            const categoria = await client.collection('categoria').findOne({ 'codCategoria': codCategoria });
    
            if(!categoria) {
                console.log(`Objeto ${codCategoria} não encontrado!`);
                res.status(404).send(`Objeto ${codCategoria} não encontrado!`)
            } else {
                console.log(categoria);
                res.status(201).send(
                    `Objeto ${categoria.nomeCategoria} encontrado!`
                )

                return categoria;
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codCategoria, nomeCategoria } = req.body;
            const newCategoria = new categoria({ codCategoria, nomeCategoria });
            const response = await client.collection('categoria').insertOne(newCategoria);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados categoria!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codCategoria } = req.body;
            const response = await client.collection('categoria').deleteOne({ 'codCategoria': codCategoria });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codCategoria } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codCategoria, nomeCategoria } = req.body;

            const response = await client
                .collection('categoria')
                .findOneAndReplace(
                    { 'codCategoria': codCategoria },
                    {
                        'codCategoria': codCategoria,
                        'nomeCategoria': nomeCategoria
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }

}

module.exports = new categoriaController();