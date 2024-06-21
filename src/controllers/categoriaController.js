const categoria = require('../models/categoriaLocalModel');

class categoriaController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('categoria').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} categorias catalogadas.`)
            } else {
                res.status(201).send(`${contador} categoria catalogada.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codCategoria } = req.body;
    
            const categoria = await client.db('test_db').collection('categoria').findOne({ 'codCatLoc': codCategoria });
    
            if(!categoria) {
                console.log(`Objeto ${nome} não encontrado!`);
                res.status(201).send(`Objeto ${nome} não encontrado!`)
            } else {
                console.log(categoria);
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
            const { codCategoria, nomeCategoria } = req.body;
            const newCategoria = new categoria({ codCategoria, nomeCategoria });
            const response = await client.db('test_db').collection('categoria').insertOne(newCategoria);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados categoria!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new categoriaController();