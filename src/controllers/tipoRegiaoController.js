const tipoRegiao = require('../models/tipoRegiaoModel');

class tipoRegiaoController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('tipoRegiao').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} tipos de regiões catalogados.`)
            } else {
                res.status(201).send(`${contador} tipo de região catalogado.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { nome } = req.body;
    
            const tipoRegiao = await client.db('test_db').collection('tipoRegiao').findOne({ 'nome': nome });
    
            if(!tipoRegiao) {
                console.log(`Objeto ${nome} não encontrado!`);
                res.status(201).send(`Objeto ${nome} não encontrado!`)
            } else {
                console.log(tipoRegiao);
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
            const { codTipoRegiao, nome } = req.body;
            const newTipoRegiao = new tipoRegiao ({ codTipoRegiao , nome });
            const response = await client.db('test_db').collection('tipoRegiao').insertOne(newTipoRegiao);

            // console.log(`Objeto adicionado ao banco de dados Unidade Federativa (uf)!`);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados tipoRegiao!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new tipoRegiaoController();