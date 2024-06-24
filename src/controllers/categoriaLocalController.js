const categoriaLocal = require('../models/ocorrenciaLocalModel');

class categoriaLocalController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('categoriaLocal').find().toArray();

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
            const { codCatLoc } = req.body;
    
            const categoriaLocal = await client.collection('categoriaLocal').findOne({ 'codCatLoc': codCatLoc });
    
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
            const response = await client.collection('categoriaLocal').insertOne(newCategoriaLocal);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados categoria local!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codCatLoc } = req.body;
            const response = await client.collection('categoriaLocal').deleteOne({ 'codCatLoc': codCatLoc });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codCatLoc } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codCatLoc, nomeCategoria, codUf, codEspecie, codCategoria } = req.body;

            const response = await client
                .collection('categoriaLocal')
                .findOneAndReplace(
                    { 'codCatLoc': codCatLoc },
                    {
                        'codCatLoc': codCatLoc,
                        'nomeCategoria': nomeCategoria,
                        'codUf': codUf,
                        'codEspecie': codEspecie,
                        'codCategoria': codCategoria
                    })

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }
}

module.exports = new categoriaLocalController();