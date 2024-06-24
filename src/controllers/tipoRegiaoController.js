const tipoRegiao = require('../models/tipoRegiaoModel');

class tipoRegiaoController {
    
    async getAll( req, res, client ) {
        try {

            const obj = await client.collection('tipoRegiao').find().toArray();

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
            const { codTipoRegiao } = req.body;
    
            const tipoRegiao = await client.collection('tipoRegiao').findOne({ 'codTipoRegiao': codTipoRegiao });
    
            if(!tipoRegiao) {
                console.log(`Objeto de identificador ${codTipoRegiao} não encontrado!`);
                res.status(404).send(`Objeto de identificador ${codTipoRegiao} não encontrado!`)
            } else {
                console.log(tipoRegiao);
                res.status(201).send(
                    `Objeto ${tipoRegiao.nome} encontrado!`
                )

                return tipoRegiao;
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
            const response = await client.collection('tipoRegiao').insertOne(newTipoRegiao);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados tipoRegiao!`);
        }
        catch {
            (err) => console.log(err);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codTipoRegiao } = req.body;
            const response = await client.collection('tipoRegiao').deleteOne({ 'codTipoRegiao': codTipoRegiao });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codTipoRegiao } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados tipo regiao.`);
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codTipoRegiao } = req.body;
            const response = await client.collection('tipoRegiao').deleteOne({ 'codTipoRegiao': codTipoRegiao });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codTipoRegiao } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados rodovia.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            
            const { codTipoRegiao, nome } = req.body;

            const response = await client
                .collection('tipoRegiao')
                .findOneAndReplace(
                    { 'codTipoRegiao': codTipoRegiao }, 
                    {
                        'codTipoRegiao': codTipoRegiao,
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

module.exports = new tipoRegiaoController();