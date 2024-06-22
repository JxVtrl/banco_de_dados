const categoriaLocal = require('../models/categoriaLocalModel');

class categoriaLocalController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('categoriaLocal').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} categorias locais catalogadas.`)
            } else {
                res.status(201).send(`${contador} categoria local catalogada.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codCatLoc } = req.body;
    
            const categoriaLocal = await client.db('test_db').collection('categoriaLocal').findOne({ 'codCatLoc': codCatLoc });
    
            if(!categoriaLocal) {
                console.log(`Objeto ${codCatLoc} não encontrado!`);
                res.status(201).send(`Objeto ${codCatLoc} não encontrado!`)
            } else {
                console.log(categoriaLocal);
                res.status(201).send(
                    `Objeto ${categoriaLocal.nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codCatLoc, nome, codUf, codEspecie, codCategoria } = req.body;
            const newCategoriaLocal = new categoriaLocal({ codCatLoc, nome, codUf, codEspecie, codCategoria });
            const response = await client.db('test_db').collection('categoriaLocal').insertOne(newCategoriaLocal);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados categoria local!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new categoriaLocalController();