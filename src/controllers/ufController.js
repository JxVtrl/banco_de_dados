const uf = require('../models/ufModel');

class ufController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('uf').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} estados catalogados.`)
            } else {
                res.status(201).send(`${contador} estado catalogado.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codUf } = req.body;
    
            const uf = await client.db('test_db').collection('uf').findOne({ 'codUf': codUf });
    
            if(!uf) {
                console.log(`Objeto ${codUf} não encontrado!`);
                res.status(404).send(`Objeto ${codUf} não encontrado!`)
            } else {
                console.log(uf);
                res.status(201).send(
                    `Objeto ${uf.nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codUf, nome } = req.body;
            const newUf = new uf({ codUf, nome });
            const response = await client.db('test_db').collection('uf').insertOne(newUf);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados Unidade Federativa (uf)!`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao adicionar objeto ao banco de dados uf.`);
        }
    }
}

module.exports = new ufController();