const ufModel = require('../models/ufModel');
const uf = require('../models/ufModel');

class ufController {
    
    async getAll( req, res, client ) {
        try {

            // const obj = await client.db('test_db').collection('uf').find().toArray();
            const obj = await client.collection('uf').find().toArray();

            console.log(obj)

            res.status(200).send('Objeto(s) encontrado(s)');
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codUf } = req.body;
    
            // const uf = await client.db('test_db').collection('uf').findOne({ 'codUf': codUf });
            const uf = await client.collection('uf').findOne({ 'codUf': codUf });
    
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
            const uf = new ufModel({ "codUf": codUf, "nome": nome });
            await uf.save();
            client.collection('uf').insertOne(uf);
            res.send('Documento salvo com sucesso!');
        } catch (err) {
            res.status(500).send('Erro ao adicionar objeto ao banco de dados uf');
        }
    }

    async deleteOne( req, res, client ) {
        try {
            const { codUf } = req.body;
            const response = await client.collection('uf').deleteOne({ 'codUf': codUf });
            console.log(response);
            res.status(201).send(`Objeto de identificador ${ codUf } deletado com sucesso`);
        }
        catch {
            (err) => console.log(err);
            res.status(404).send(`Erro ao deletar objeto do banco de dados uf.`);
        }
    }

    async updateOne( req, res, client ) {
        try {
            const { codUf, nome } = req.body;

            const response = await client
                .collection('uf')
                .findOneAndReplace(
                    { 'codUf': codUf }, 
                    { 
                        'codUf': codUf,
                        'nome': nome
                    }
                )

            console.log(response)
            
            res.send('Objeto atualizado no banco de dados com sucesso!');
        }
        catch {
            console.log('Ocorreu algo de errado');
        }
    }

}

module.exports = new ufController();